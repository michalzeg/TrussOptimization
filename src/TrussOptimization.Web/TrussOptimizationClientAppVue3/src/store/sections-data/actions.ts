import { ActionTree, ActionContext } from "vuex";
import { SectionsDataState } from "./state";
import SectionData from "@/shared/sections/section-data";
import Section from "@/shared/sections/section";
import { getSections } from "@/core/http/http";
import { CalculationsState } from "@/core/calculations/calculations-state";
export const actions: ActionTree<SectionsDataState, any> = {
  fetchSection(store: ActionContext<SectionsDataState, any>) {
    store.dispatch("setCalculationsState", CalculationsState.loading);
    getSections().then(res => {
      store.commit(
        "setSection",
        (<SectionData[]>res.data).map(e => new Section(e))
      );
      store.dispatch("saveChanges");
      store.dispatch("setCalculationsState", CalculationsState.dirty);
    });
  },

  addSection(store: ActionContext<SectionsDataState, any>, payload: any) {
    store.commit("addSection", payload);
  },

  removeSection(
    store: ActionContext<SectionsDataState, any>,
    payload: any
  ): void {
    store.commit("removeSection", payload);
  },
  changeTypeName(
    store: ActionContext<SectionsDataState, any>,
    payload: any
  ): void {
    store.commit("changeTypeName", payload);
  },
  changeMaxDimension(
    store: ActionContext<SectionsDataState, any>,
    payload: any
  ): void {
    store.commit("changeMaxDimension", payload);
  },
  changeMinDimension(
    store: ActionContext<SectionsDataState, any>,
    payload: any
  ): void {
    store.commit("changeMinDimension", payload);
  },

  saveChanges(store: ActionContext<SectionsDataState, any>) {
    store.commit("saveChanges");
    store.dispatch("setTrussSectionsForDrawing3d", store.getters.trussSections);
  },
  cancelChanges(store: ActionContext<SectionsDataState, any>) {
    store.commit("cancelChanges");
  }
};
