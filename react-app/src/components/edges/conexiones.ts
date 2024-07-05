import { MarkerType, type Edge, type EdgeTypes } from "reactflow";

export const initialEdges = [
  {
    id: "fhir->ips",
    source: "fhir",
    target: "ips",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "fhir->core",
    source: "fhir",
    target: "core",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#DC5529",
    },
    style: {
      strokeWidth: 2,
      stroke: "#DC5529",
    },
  },
  {
    id: "fhir->tiempo_espera",
    source: "fhir",
    target: "tiempo_espera",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#DC5529",
    },
    style: {
      strokeWidth: 2,
      stroke: "#DC5529",
    },
  },
  {
    id: "fhir->maestro_paciente",
    source: "fhir",
    target: "maestro_paciente",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#DC5529",
    },
    style: {
      strokeWidth: 2,
      stroke: "#DC5529",
    },
  },
  {
    id: "fhir->receta_medica",
    source: "fhir",
    target: "receta_medica",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#DC5529",
    },
    style: {
      strokeWidth: 2,
      stroke: "#DC5529",
    },
  },
  {
    id: "deis->core",
    source: "deis",
    target: "core",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "ips->ipscl",
    source: "ips",
    target: "ipscl",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "ipscl->core",
    source: "ipscl",
    target: "core",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "core->core_minsal",
    source: "core",
    target: "core_minsal",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "core->otras_guias",
    source: "core",
    target: "otras_guias",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "core->hl7_guias",
    source: "core",
    target: "hl7_guias",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "core->maestro_paciente",
    source: "core",
    target: "maestro_paciente",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#DC5529",
    },
    style: {
      strokeWidth: 2,
      stroke: "#DC5529",
    },
  },
  {
    id: "core->tiempo_espera",
    source: "core",
    target: "tiempo_espera",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#DC5529",
    },
    style: {
      strokeWidth: 2,
      stroke: "#DC5529",
    },
  },
  {
    id: "core_minsal->maestro_paciente",
    source: "core_minsal",
    target: "maestro_paciente",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "core_minsal->tiempo_espera",
    source: "core_minsal",
    target: "tiempo_espera",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
  {
    id: "core_minsal->receta_medica",
    source: "core_minsal",
    target: "receta_medica",
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 10,
      height: 10,
      color: "#18A33A",
    },
    style: {
      strokeWidth: 5,
      stroke: "#18A33A",
    },
  },
] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
