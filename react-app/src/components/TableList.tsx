import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { nombreTablasMapeadas } from "./Mappings";

const TableList = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const response = await axios.get("http://localhost:4372/api/tables");
        setTables(response.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };
    fetchTables();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Guías de Implementación</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="list-group">
            <ul>
              {tables.map((table, index) => (
                <li key={table}>
                  <Link
                    to={`/tables/${table}`}
                    className="list-group-item list-group-item-action border rounded mb-2 shadow-sm"
                    key={index}
                  >
                    {nombreTablasMapeadas[table] || table}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableList;
