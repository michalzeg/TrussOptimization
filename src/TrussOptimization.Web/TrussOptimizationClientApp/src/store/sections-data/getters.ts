import { GetterTree } from "vuex";
import { SectionsDataState } from "./state";
import TrussSections from "@/shared/sections/truss-sections";

export const getters: GetterTree<SectionsDataState, any> = {
  trussSections: (state: SectionsDataState) => {
    const top = state.topSectionsFinal[0].getMinSectionType();
    const bottom = state.bottomSectionsFinal[0].getMinSectionType();
    const bracing = state.bracingSectionsFinal[0].getMinSectionType();

    const result = new TrussSections(top, bracing, bottom);
    return result;
  }
};
