import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { nombreTablasMapeadas } from "./Mappings";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const TableList = () => {
  const [tables, setTables] = useState([]);
  const [hasData, setHasData] = useState({});

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("http://localhost:4372/api/tables");
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

  return (
    <div className="table-list-container">
      <div className="card" style={{ width: "700px" }}>
        <img
          src="https://hl7chile.cl/wp-content/uploads/2023/04/hl7chile-1.png"
          className="img-fluid w-50 custom-image"
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
                <ul className="list-group">
                  {tables.map((table) => (
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
                        {nombreTablasMapeadas[table] || table}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-body">
                <a
                  href="https://hl7chile.cl/"
                  className="list-group-item list-group-item-action border rounded mb-2 shadow-sm letra"
                >
                  HL7 Chile
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
