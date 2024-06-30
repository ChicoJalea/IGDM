// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TableData from "./components/TableData";
import TableList from "./components/TableList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableList />} />
        <Route path="/tables/:tableName" element={<TableData />} />
      </Routes>
    </Router>
  );
};

export default App;
