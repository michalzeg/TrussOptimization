import { ControlPanelState } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const controlPanelModule = {
  state: new ControlPanelState(),
  getters,
  mutations,
  actions
};
