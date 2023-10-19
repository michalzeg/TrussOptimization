import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { SectionsDataState } from "./state";

export const sectionsDataModule = {
  state: new SectionsDataState(),
  getters,
  mutations,
  actions
};
