import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h1>Tables</h1>
      <ul>
        {tables.map((table) => (
          <li key={table}>
            <Link to={`/tables/${table}`}>{table}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
