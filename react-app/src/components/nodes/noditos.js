import { PositionLoggerNode } from "./PositionLoggerNode";

export const initialNodes = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "FHIR" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -180, y: 200 },
    data: { label: "DEIS" },
  },
  {
    id: "c",
    position: { x: 0, y: 200 },
    data: { label: "IPS" },
  },
  { id: "d", position: { x: 100, y: 300 }, data: { label: "IPS Cl" } },
  { id: "e", position: { x: 0, y: 500 }, data: { label: "CoreCl" } },
  { id: "f", position: { x: 200, y: 650 }, data: { label: "Core Minsal" } },
  {
    id: "g",
    type: "output",
    position: { x: -50, y: 650 },
    data: { label: "Otras Guías" },
  },
  {
    id: "h",
    type: "output",
    position: { x: 400, y: 650 },
    data: { label: "Guías HL7" },
  },
  {
    id: "l",
    type: "output",
    position: { x: -100, y: 800 },
    data: { label: "Receta Médica" },
  },
  {
    id: "k",
    type: "output",
    position: { x: 100, y: 800 },
    data: { label: "Maestro Paciente" },
  },
  {
    id: "i",
    type: "output",
    position: { x: 300, y: 800 },
    data: { label: "Tiempos de Espera" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
};
