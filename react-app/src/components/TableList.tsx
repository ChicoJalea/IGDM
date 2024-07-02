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
            <h5 className="card-title">Guías de Implementación</h5>
            <p className="card-text">
              Todas las guías de implementación habilitadas se encuentran de
              color verde, siendo las de color rojo las que aún se encuentran en
              desarrollo
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
                      <Link to={`/tables/${table}`} className="stretched-link">
                        {nombreTablasMapeadas[table] || table}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-body">
                <a href="https://hl7chile.cl/" className="card-link">
                  HL7 Chile
                </a>
                <Link
                  to="/diagram"
                  className="list-group-item list-group-item-action border rounded mb-2 shadow-sm"
                >
                  Ver Diagrama de Tablas
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
