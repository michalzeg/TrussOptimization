import { MutationTree } from "vuex";
import { Drawing3dState } from "./state";
import { TrussStructure } from "@/core/truss/truss-structure";
import TrussSections from "@/shared/sections/truss-sections";

export const mutations: MutationTree<Drawing3dState> = {
  setTrussStructureForDrawing3d(
    state: Drawing3dState,
    payload: TrussStructure
  ) {
    state.trussStructure = payload;
  },
  setTrussSectionsForDrawing3d(state: Drawing3dState, payload: TrussSections) {
    state.trussSections = payload;
  }
};
