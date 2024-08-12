/* lo que hace este archivo es practicamente posicionar a los nodos, asignarle una id, un nombre y darle
un estilo. Luego se exporta para ser usado en el componente de Mapa */
import { Background } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  {
    id: "fhir",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "FHIR" },
    style: { backgroundColor: "#18A33A" },
  },
  {
    id: "eis",
    position: { x: -100, y: 150 },
    data: { label: "EIS" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "ips",
    position: { x: 300, y: 100 },
    data: { label: "IPS" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "ipscl",
    position: { x: 20, y: 450 },
    data: { label: "IPS Cl" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "core",
    position: { x: 300, y: 300 },
    data: { label: "CoreCl" },
    style: { backgroundColor: "#18A33A" },
  },
  {
    id: "core_minsal",
    position: { x: 200, y: 450 },
    data: { label: "Core Minsal" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "otras_guias",
    type: "output",
    position: { x: -150, y: 450 },
    data: { label: "Otras Guías" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "hl7_guias",
    type: "output",
    position: { x: 400, y: 450 },
    data: { label: "Guías HL7" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "receta_medica",
    type: "output",
    position: { x: -100, y: 800 },
    data: { label: "Receta Médica" },
    style: { backgroundColor: "#18A33A" },
  },
  {
    id: "maestro_paciente",
    type: "output",
    position: { x: 100, y: 800 },
    data: { label: "Maestro Paciente" },
    style: { backgroundColor: "#18A33A" },
  },
  {
    id: "tiempo_espera",
    type: "output",
    position: { x: 300, y: 800 },
    data: { label: "Tiempos de Espera" },
    style: { backgroundColor: "#18A33A" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
};
