import { ActionTree, ActionContext } from "vuex";
import { ControlPanelState } from "./state";
import CalculationsResult from "@/core/calculations/calculations-result";
import { CalculationsState } from "@/core/calculations/calculations-state";

export const actions: ActionTree<ControlPanelState, any> = {
  toggleGeneratorModal(store: ActionContext<ControlPanelState, any>) {
    store.commit("toggleGeneratorModal");
  },

  addCalculationsResult(
    store: ActionContext<ControlPanelState, any>,
    payload: CalculationsResult
  ) {
    store.commit("addCalculationsResult", payload);
  },

  setCalculationsState(
    store: ActionContext<ControlPanelState, any>,
    payload: CalculationsState
  ) {
    store.commit("setCalculationsState", payload);
  },

  clearResults(store: ActionContext<ControlPanelState, any>) {
    store.commit("clearResults");
  }
};
