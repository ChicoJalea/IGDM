import { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Node,
} from "reactflow";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
// @ts-ignore
import { initialNodes, nodeTypes } from "./nodes/noditos";
import { initialEdges, edgeTypes } from "./edges/conexiones";
import { useNavigate } from "react-router-dom";
import Legend from "./Legend";

export default function Mapa() {
  const navigate = useNavigate();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  const handleNodeClick = (
    // @ts-ignore
    event: React.MouseEvent,
    node: Node<any, string | undefined>
  ) => {
    console.log("Node clicked:", node.type); // Add this logging statement
    if (
      node.id === "fhir" ||
      "core" ||
      "receta_medica" ||
      "maestro_paciente" ||
      "tiempo_espera"
    ) {
      const nodeId = node.id;
      console.log(`wena loco}`); // Add this logging statement
      navigate(`/tables/${nodeId}`); // Navega a la ruta que muestra los datos de la tabla correspondiente al nodo
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <ReactFlow
        onNodeClick={handleNodeClick}
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        style={rfStyle}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
      <div style={{ position: "absolute", top: 10, left: 10 }}>
        <Legend />
      </div>
    </div>
  );
}
