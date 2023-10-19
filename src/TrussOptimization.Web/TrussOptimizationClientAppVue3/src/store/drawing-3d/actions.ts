import { ActionTree, ActionContext } from "vuex";
import { Drawing3dState } from "./state";
import { TrussStructure } from "@/core/truss/truss-structure";
import TrussSections from "@/shared/sections/truss-sections";

export const actions: ActionTree<Drawing3dState, any> = {
  setTrussStructureForDrawing3d(
    store: ActionContext<Drawing3dState, any>,
    payload: TrussStructure
  ) {
    store.commit("setTrussStructureForDrawing3d", payload);
  },
  setTrussSectionsForDrawing3d(
    store: ActionContext<Drawing3dState, any>,
    payload: TrussSections
  ) {
    store.commit("setTrussSectionsForDrawing3d", payload);
  }
};
