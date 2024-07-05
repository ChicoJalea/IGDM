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
    id: "deis",
    type: "position-logger",
    position: { x: -180, y: 200 },
    data: { label: "DEIS" },
    style: { backgroundColor: "#EFB412" },
  },
  {
    id: "ips",
    position: { x: 0, y: 200 },
    data: { label: "IPS" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "ipscl",
    position: { x: 100, y: 300 },
    data: { label: "IPS Cl" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "core",
    position: { x: 0, y: 500 },
    data: { label: "CoreCl" },
    style: { backgroundColor: "#18A33A" },
  },
  {
    id: "core_minsal",
    position: { x: 200, y: 650 },
    data: { label: "Core Minsal" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "otras_guias",
    type: "output",
    position: { x: -50, y: 650 },
    data: { label: "Otras Guías" },
    style: { backgroundColor: "#B32D1C" },
  },
  {
    id: "hl7_guias",
    type: "output",
    position: { x: 400, y: 650 },
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
