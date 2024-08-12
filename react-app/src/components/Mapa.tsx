// este componente se encarga de armar el mapa de relaciones.

import { useCallback } from "react"; //componente principal que renderiza el diagrama
import {
  Background, //añade un fondo al mapa/diagrama
  Controls, //añade controles de zoom y otras interacciones
  MiniMap, //añade un minimapa para la navegación dentro del gráfico.
  ReactFlow, //Importa varios componentes y hooks de React Flow
  addEdge, //Función para añadir un borde entre nodos.
  useNodesState, //Manejan el estado de los nodos y bordes.
  useEdgesState,
  Connection, //Definen las estructuras de datos para las conexiones, bordes y nodos.
  Edge,
  Node,
} from "reactflow";

const rfStyle = {
  backgroundColor: "#B8CEFF", //estilo del fondo del mapa
};

import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
// @ts-ignore
import { initialNodes, nodeTypes } from "./nodes/noditos"; //Importan los nodos iniciales y tipos de nodos personalizados.
import { initialEdges, edgeTypes } from "./edges/conexiones"; //Importan los bordes iniciales y tipos de bordes personalizados.
import { useNavigate } from "react-router-dom"; //Un hook de react-router-dom para la navegación programática.
import Legend from "./Legend"; //Un componente que muestra una leyenda para el mapa.

/* la siguiente función describe el funcioanmiento del componente de Mapa. Lo que hace es navegar
en los nodos con useNavigate; al clickear uno cambia su estado con los hooks de useNodesState, useEdgesState y
onNodesChange, onEdgesChange. Los dos primeros manejan los estados actuales, mientras que los últimos dos actualizan
su estados */
export default function Mapa() {
  const navigate = useNavigate();
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  /* onConnect es una función que se ejecuta cuando se crea una 
nueva conexión entre nodos. Utiliza addEdge para añadir la conexión al estado de edges. */
  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );
  /* handleNideClick maneja los clicks en los nodo. Si el nodo tiene un id específico navega 
a esa ruta correspondiente. Esto conecta con el componente de TableData */
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
  /* Acá se renderiza todo */
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
