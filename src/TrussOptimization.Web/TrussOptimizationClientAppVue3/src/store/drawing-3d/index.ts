import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { Drawing3dState } from "./state";

export const drawing3dModule = {
  state: new Drawing3dState(),
  getters,
  mutations,
  actions
};
