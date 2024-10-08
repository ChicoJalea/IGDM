/* este componente es de cara lo primero que se muestra en la aplicación, muestra una breve explicación,
un par de botones para navegar hacia la página de HL7 Chile y otra para navegar al componente de Mapa. Además
presenta la lista de todas las tablas (las guías de implementación) las cuales se pueden navegar hacia su
contenido clickeando en ellas. Esta lista clasifica las tablas en recuadros según su nivel jerárquico y presenta
una breve explicación de cada guía*/
import { useEffect, useState } from "react";
/* hooks para realizar efectos secundarios manejar el estado local
 */
import { Link } from "react-router-dom";
import axios from "axios";
import {
  //importa los mapeos y listas para trabajar el orden, descripciones, títulos de las tablas
  nombreTablasMapeadas,
  tableOrder,
  tableGroupTitles,
  tableDescriptions,
} from "./Mappings";
import "bootstrap/dist/css/bootstrap.min.css"; //importa estilos
import "./styles.css";
/* almacena la lista de nombres de tablas y almacena si cada tabla tiene datos o no, donde la clave 
es el nombre de la tabla y el valor es un booleano */
const TableList = () => {
  const [tables, setTables] = useState<string[]>([]);
  const [hasData, setHasData] = useState<{ [key: string]: boolean }>({});
  /* Ejecuta la función fetchTables cuando el componente se monta. */
  /* hace una solicitud HTTP para obtener la lista de tablas desde la API creada.
Ordena las tablas de acuerdo a "tableOrder", actualiza el estado de tables con la lista obtenida,
donde para cada tabla, realiza otra solicitud para verificar si contiene datos y almacena esa información 
en hasData. Promise.all asegura que todas las solicitudes para verificar los datos se completen
 antes de actualizar hasData */
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("http://localhost:4372/api/tables");
        let fetchedTables = response.data;
        fetchedTables = fetchedTables.sort((a: string, b: string) => {
          return tableOrder.indexOf(a) - tableOrder.indexOf(b);
        });

        setTables(response.data);

        const dataCheckPromises = response.data.map(async (table: any) => {
          const res = await axios.get(
            `http://localhost:4372/api/tables/${table}`
          );
          return { table, hasData: res.data.length > 0 };
        });

        const dataCheckResults = await Promise.all(dataCheckPromises);
        const dataCheckState = dataCheckResults.reduce(
          (acc, { table, hasData }) => {
            acc[table] = hasData;
            return acc;
          },
          {}
        );

        setHasData(dataCheckState);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    fetchTables();
  }, []);
  /* la siguiente funcion permite dividir las tablas en grupos de acuerdo con los tamaños especificados en
groupSizes, por ejemplo, si este es [2,2,2,5], agrupará las tablas en cuatro grupos, 
con los primeros tres grupos conteniendo dos tablas cada uno y el último grupo cinco tablas */
  const divideTablesIntoGroups = (tables: string[], groupSizes: number[]) => {
    let startIndex = 0;
    return groupSizes.map((size) => {
      const group = tables.slice(startIndex, startIndex + size);
      startIndex += size;
      return group;
    });
  };

  const tableGroups = divideTablesIntoGroups(tables, [2, 2, 2, 5]);
  /* lo siguiente es la renderización del componente con algunos estilos importados de boostrap y otros
hechos en un archivo CSS propio, además de añadir texto en algunas secciones, como algunos títulos,
botones y la explicación que se muestra en pantalla. Por último también se añadió el logo de HL7 Chile y 
el de la Universidad de Valparaíso*/
  return (
    <div className="table-list-container">
      <div className="card" style={{ width: "700px" }}>
        <img
          src="https://hl7chile.cl/wp-content/uploads/2023/04/hl7chile-1.png"
          className="img-fluid w-50 custom-image"
          alt="HL7 Chile"
        ></img>
        <img
          src="https://uv.cl/images/descargas-corporativas/uv_logo_alta_rgba_azul-2023.png"
          className="logoUV"
        ></img>
        <div className="container">
          <div className="card-body">
            <h5 className="card-title">
              Visualizador de Guías de Implementación
            </h5>
            <p className="card-text">
              Esta es una lista que muestra el entorno de desarrollo de las
              guías de implementación a nivel nacional, tanto de las que ya
              están habilitadas (color verde), como las que aún no se encuentran
              disponibles (color rojo). Cada guía disponible presenta en su
              contenido, los recursos que utiliza para construir sus artefactos
              perfiles y sus dependencias en que se basa. Además, se deja a
              disposición de un mapa de G.I para entender la jerarquía y las
              relaciones entre estas.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="list-group">
                {tableGroups.map((group, index) => (
                  <div key={index} className="card mb-3">
                    <div className="card-header">
                      <h5>{tableGroupTitles[index]}</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        {group.map((table: string) => (
                          <li
                            key={table}
                            className={`list-group-item list-group-item-action border rounded mb-2 shadow-sm ${
                              hasData[table]
                                ? "list-group-item-success"
                                : "list-group-item-danger"
                            }`}
                          >
                            <Link
                              to={`/tables/${table}`}
                              className="stretched-link letra"
                            >
                              {(nombreTablasMapeadas as Record<string, string>)[
                                table
                              ] || table}
                            </Link>
                            <p className="mb-0">{tableDescriptions[table]}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div className="card-body">
                <a
                  href="https://hl7chile.cl/"
                  className="list-group-item list-group-item-action border rounded mb-2 shadow-sm letra"
                >
                  HL7 Chile Web
                </a>
                <Link
                  to="/mapa"
                  className="list-group-item list-group-item-action border rounded mb-2 shadow-sm"
                >
                  Mapa de Relaciones
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
