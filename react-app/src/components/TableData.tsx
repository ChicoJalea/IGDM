/* este componente sitúa al contenido de cada tabla, por lo que variará según el id o nombre pasado
a la ruta que conecta con la API. Además de esto personaliza el contenido a mostrar, combinando dos columnas;
asigna el link de la página de la guía al computable name */
import React, { useEffect, useState } from "react";
import axios from "axios"; //permite hace solicitudes HTTP desde un navegador o un entorno de Node.js
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { nombreColumnasMapeadas, nombreTablasMapeadas } from "./Mappings"; //nombres mapeados de las columnas y guías
import { linksCaidos } from "./badLinks"; //links caídos para denotarlos en color rojo

interface TableDataProps {
  //Es una interfaz que define el tipo de los datos que se utilizarán en el componente.
  [key: string]: any;
  isLinkDown?: boolean; // Atributo opcional para marcar enlaces caídos
}
/* Utiliza useParams para obtener el nombre de la tabla desde la URL, 
lo que permite que el contenido de la tabla varíe dinámicamente.
Almacena los datos obtenidos de la API */
const TableData: React.FC = () => {
  const { tableName } = useParams<{ tableName: string }>();
  const [data, setData] = useState<TableDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  /* useEffect carga los datos de la API cuando el componente se monta y cada vez que tableName cambia.
Lo demás es para identificar errores al cargar. */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4372/api/tables/${tableName}`
        );
        // Aquí puedes agregar manualmente el atributo isLinkDown a las filas correspondientes
        const updatedData = response.data.map((item: TableDataProps) => {
          if (linksCaidos.includes(item.url_version)) {
            item.isLinkDown = true;
          }
          if (linksCaidos.includes(item.dep_core)) {
            item.isLinkDown = true;
          }
          // Agrega más condiciones según sea necesario
          return item;
        });
        setData(updatedData);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [tableName]);

  if (loading) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-5">{error}</div>;
  }
  /* Se utiliza un mapeo de columnas específico para cada tabla, obtenido del archivo Mappings. */
  const columnMapping =
    nombreColumnasMapeadas[tableName as keyof typeof nombreColumnasMapeadas] ||
    {};
  /* el componente devuelve una estructura HTML */
  return (
    <div className="table-data-container">
      <div className="container mt-5">
        <h1 className="text-center mb-4">
          Contenido de{" "}
          {nombreTablasMapeadas[
            tableName as keyof typeof nombreColumnasMapeadas
          ] || tableName}
        </h1>
        <div className="table-responsive fixed-header-table">
          {data.length === 0 ? (
            <p>No data found.</p>
          ) : (
            <div className="overflow">
              <table className="table table-bordered table-hover">
                <thead className="thead-dark">
                  <tr>
                    {Object.keys(data[0])
                      .filter(
                        (key) =>
                          key !== "url" &&
                          key !== "url_version" &&
                          key !== "url_dep" &&
                          key !== "dep_fhir" &&
                          key !== "dep_core" &&
                          key !== "isLinkDown" // Filtrar isLinkDown
                      )
                      .map((key) => (
                        <th key={key}>
                          {columnMapping[key as keyof typeof columnMapping] ||
                            key}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {Object.entries(item)
                        .filter(
                          ([key]) =>
                            key !== "url" &&
                            key !== "url_version" &&
                            key !== "url_dep" &&
                            key !== "dep_fhir" &&
                            key !== "dep_core" &&
                            key !== "isLinkDown" // Filtrar isLinkDown
                        )
                        .map(([key, value], i) => (
                          <td key={i}>
                            {key === "recurso" && item.url ? (
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={item.isLinkDown ? "text-danger" : ""}
                              >
                                {value}
                              </a>
                            ) : key === "id_computableName" &&
                              item.url_version ? (
                              <a
                                href={item.url_version}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={item.isLinkDown ? "text-danger" : ""}
                              >
                                {value}
                              </a>
                            ) : key === "dependencia" && item.url_dep ? (
                              <a
                                href={item.url_dep}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={item.isLinkDown ? "danger" : ""}
                              >
                                {value}
                              </a>
                            ) : key === "dependencia" && item.dep_fhir ? (
                              <a
                                href={item.dep_fhir}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={item.isLinkDown ? "text-danger" : ""}
                              >
                                {value}
                              </a>
                            ) : key === "dependencia" && item.dep_core ? (
                              <a
                                href={item.dep_core}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={item.isLinkDown ? "text-danger" : ""}
                              >
                                {value}
                              </a>
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TableData;
