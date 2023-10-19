import { GetterTree } from "vuex";
import { GeneratorModalState } from "./state";

export const getters: GetterTree<GeneratorModalState, any> = {
  isActiveTruss: (state: GeneratorModalState) => (
    trussName: string
  ): boolean => {
    return state.activeTruss.name === trussName;
  },
  trussStructure: (state: GeneratorModalState) => {
    return state.activeTruss.getTrussStructure(
      state.lengthFinal,
      state.heightFinal,
      state.loadFinal
    );
  }
};
