import { MutationTree } from "vuex";
import { ControlPanelState } from "./state";
import CalculationsResult from "@/core/calculations/calculations-result";
import { CalculationsState } from "@/core/calculations/calculations-state";

export const mutations: MutationTree<ControlPanelState> = {
  toggleGeneratorModal(state: ControlPanelState) {
    state.isGeneratorOpened = !state.isGeneratorOpened;
  },

  addCalculationsResult(state: ControlPanelState, payload: CalculationsResult) {
    state.calculationsProgress = [...state.calculationsProgress, payload];
  },
  setCalculationsState(state: ControlPanelState, payload: CalculationsState) {
    state.calculationsState = payload;
  },
  clearResults(state: ControlPanelState) {
    state.calculationsProgress = [];
  }
};
