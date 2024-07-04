import { MarkerType, type Edge, type EdgeTypes } from "reactflow";

export const initialEdges = [
  {
    id: "a->c",
    source: "a",
    target: "c",
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
    id: "a->e",
    source: "a",
    target: "e",
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
    id: "a->i",
    source: "a",
    target: "i",
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
    id: "a->k",
    source: "a",
    target: "k",
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
    id: "a->l",
    source: "a",
    target: "l",
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
    id: "b->e",
    source: "b",
    target: "e",
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
    id: "c->d",
    source: "c",
    target: "d",
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
    id: "d->e",
    source: "d",
    target: "e",
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
    id: "e->f",
    source: "e",
    target: "f",
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
    id: "e->g",
    source: "e",
    target: "g",
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
    id: "e->h",
    source: "e",
    target: "h",
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
    id: "e->k",
    source: "e",
    target: "k",
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
    id: "e->i",
    source: "e",
    target: "i",
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
    id: "f->k",
    source: "f",
    target: "k",
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
    id: "f->i",
    source: "f",
    target: "i",
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
    id: "f->l",
    source: "f",
    target: "l",
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
