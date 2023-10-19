import { GeneratorModalState } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

export const generatorModalModule = {
  state: new GeneratorModalState(),
  getters,
  mutations,
  actions
};
