import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { nombreColumnasMapeadas, nombreTablasMapeadas } from "./Mappings";

interface TableDataProps {
  [key: string]: any;
}

const TableData: React.FC = () => {
  const { tableName } = useParams<{ tableName: string }>();
  const [data, setData] = useState<TableDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4372/api/tables/${tableName}`
        );
        setData(response.data);
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

  const columnMapping =
    nombreColumnasMapeadas[tableName as keyof typeof nombreColumnasMapeadas] ||
    {};

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Contenido de{" "}
        {nombreTablasMapeadas[
          tableName as keyof typeof nombreColumnasMapeadas
        ] || tableName}
      </h1>
      <div className="table-responsive">
        {data.length === 0 ? (
          <p>No data found.</p>
        ) : (
          <table className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>
                    {columnMapping[key as keyof typeof columnMapping] || key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, i) => (
                    <td key={i}>
                      {typeof value === "string" && value.startsWith("http") ? (
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {value}
                        </a>
                      ) : (
                        (value as React.ReactNode)
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TableData;
