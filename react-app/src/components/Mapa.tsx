import React, { useEffect, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  ReactFlowProps,
} from "react-flow-renderer";
import axios from "axios";

interface Relation {
  table_name: string;
  foreign_table_name: string;
}

const Diagram = () => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Relation[]>(
          "http://localhost:4372/api/mapa"
        );
        const data = response.data;

        const nodes: any[] = [];
        const edges: any[] = [];

        data.forEach((relation: Relation, index: number) => {
          nodes.push({
            id: relation.table_name,
            data: { label: relation.table_name },
            position: { x: 250, y: index * 100 },
          });

          edges.push({
            id: `e${relation.table_name}-${relation.foreign_table_name}`,
            source: relation.table_name,
            target: relation.foreign_table_name,
            animated: true,
          });
        });

        setElements([...nodes, ...edges]);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  // Definición de las props adicionales para ReactFlow
  const flowProps: ReactFlowProps = {
    // elements: elements, // Los elementos a mostrar en el diagrama
    // nodeTypes: {
    //   customNode: CustomNodeComponent // Si tienes nodos personalizados, puedes definirlos aquí
    // },
    // edgeTypes: {
    //   customEdge: CustomEdgeComponent // Si tienes enlaces personalizados, puedes definirlos aquí
    // },
    zoomOnScroll: true, // Habilitar zoom con scroll
    zoomOnDoubleClick: true, // Habilitar zoom con doble click
    panOnScroll: true, // Habilitar pan con scroll
    nodesDraggable: false, // Hacer los nodos arrastrables o no
    nodesConnectable: true, // Hacer los nodos conectables o no
    snapToGrid: true, // Habilitar el ajuste a la cuadrícula
    snapGrid: [16, 16], // Tamaño de la cuadrícula
    minZoom: 0.5, // Zoom mínimo permitido
    maxZoom: 2, // Zoom máximo permitido
    defaultZoom: 1.2, // Zoom inicial por defecto
    onLoad: (reactFlowInstance) =>
      console.log("Flow loaded:", reactFlowInstance), // Función que se ejecuta al cargar el flujo
  };

  return (
    <div style={{ height: 800 }}>
      <ReactFlow {...flowProps}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
