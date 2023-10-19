import { ActionTree, ActionContext } from "vuex";
import { GeneratorModalState } from "./state";
import { AccordionState } from "@/shared/accordionState";

export const actions: ActionTree<GeneratorModalState, any> = {
  setActiveTruss(
    store: ActionContext<GeneratorModalState, any>,
    payload: string
  ) {
    store.commit("setActiveTruss", payload);
  },

  setLength(store: ActionContext<GeneratorModalState, any>, payload: number) {
    store.commit("setLength", payload);
  },
  setHeight(store: ActionContext<GeneratorModalState, any>, payload: number) {
    store.commit("setHeight", payload);
  },
  setLoad(store: ActionContext<GeneratorModalState, any>, payload: number) {
    store.commit("setLoad", payload);
  },

  setValid(store: ActionContext<GeneratorModalState, any>, payload: boolean) {
    store.commit("setValid", payload);
  },

  saveChanges(store: ActionContext<GeneratorModalState, any>) {
    store.commit("saveChanges");
    store.dispatch(
      "setTrussStructureForDrawing3d",
      store.getters.trussStructure
    );
  },
  cancelChanges(store: ActionContext<GeneratorModalState, any>) {
    store.commit("cancelChanges");
  },

  setCurrentTab(
    store: ActionContext<GeneratorModalState, any>,
    payload: AccordionState
  ) {
    store.commit("setCurrentTab", payload);
  }
};
