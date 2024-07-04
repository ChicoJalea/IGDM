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
  Panel,
} from "reactflow";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

import "reactflow/dist/style.css";
// @ts-ignore
import { initialNodes, nodeTypes } from "./nodes/noditos";
import { initialEdges, edgeTypes } from "./edges/conexiones";

export default function Mapa() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <ReactFlow
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
  );
}
