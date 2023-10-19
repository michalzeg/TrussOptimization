import { MutationTree } from "vuex";
import { GeneratorModalState } from "./state";
import TrussType from "@/core/truss-types/truss-type";
import { AccordionState } from "@/shared/accordionState";

export const mutations: MutationTree<GeneratorModalState> = {
  setActiveTruss(state: GeneratorModalState, payload: string) {
    const current = state.trussTypes.find(t => t.name === payload);
    state.activeTruss = <TrussType>current;
  },

  setLength(state: GeneratorModalState, payload: number) {
    state.length = payload;
  },
  setHeight(state: GeneratorModalState, payload: number) {
    state.height = payload;
  },
  setLoad(state: GeneratorModalState, payload: number) {
    state.load = payload;
  },

  setValid(state: GeneratorModalState, payload: boolean) {
    state.isValid = payload;
  },

  saveChanges(state: GeneratorModalState) {
    state.heightFinal = state.height;
    state.lengthFinal = state.length;
    state.loadFinal = state.load;
  },

  cancelChanges(state: GeneratorModalState) {
    state.height = state.heightFinal;
    state.length = state.lengthFinal;
    state.load = state.loadFinal;
  },

  setCurrentTab(state: GeneratorModalState, payload: AccordionState) {
    state.currentTab = payload;
  }
};
