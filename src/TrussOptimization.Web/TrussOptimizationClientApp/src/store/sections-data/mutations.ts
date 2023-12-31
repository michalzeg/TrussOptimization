import { MutationTree } from "vuex";

import TrussType from "@/core/truss-types/truss-type";
import { SectionsDataState } from "./state";
import Section from "@/shared/sections/section";
import SectionCollection from "@/shared/sections/section-collection";

const getName = (type: string): string => {
  const name = `${type.toLowerCase()}Sections`;
  return name;
};

export const mutations: MutationTree<SectionsDataState> = {
  setSection(state: SectionsDataState, payload: Section[]) {
    state.section = new SectionCollection(payload);
    state.topSections = [state.section.clone()];
    state.bottomSections = [state.section.clone()];
    state.bracingSections = [state.section.clone()];
  },

  addSection(state: SectionsDataState, payload: any): void {
    const name = getName(payload.type);
    state[name] = [...state[name], state.section.clone()];
  },

  removeSection(state: SectionsDataState, payload: any): void {
    const name = getName(payload.type);
    state[name] = state[name].filter((value, index) => index !== payload.index);
  },

  changeTypeName(state: SectionsDataState, payload: any): void {
    const name = getName(payload.type);
    state[name] = state[name].map((v, i) => {
      const result = v;
      if (i === payload.index) {
        result.setTypeName(payload.typeName);
      }
      return result;
    });
  },

  changeMaxDimension(state: SectionsDataState, payload: any): void {
    const name = getName(payload.type);
    state[name] = state[name].map((v, i) => {
      const result = v;
      if (i === payload.index) {
        result.setMaxDimension(payload.maxDimension);
      }
      return result;
    });
  },

  changeMinDimension(state: SectionsDataState, payload: any): void {
    const name = getName(payload.type);
    state[name] = state[name].map((v, i) => {
      const result = v;
      if (i === payload.index) {
        result.setMinDimension(payload.minDimension);
      }
      return result;
    });
  },
  saveChanges(state: SectionsDataState) {
    state.topSectionsFinal = state.topSections.map(e => e.clone());
    state.bottomSectionsFinal = state.bottomSections.map(e => e.clone());
    state.bracingSectionsFinal = state.bracingSections.map(e => e.clone());
  },
  cancelChanges(state: SectionsDataState) {
    state.topSections = state.topSectionsFinal.map(e => e.clone());
    state.bottomSections = state.bottomSectionsFinal.map(e => e.clone());
    state.bracingSections = state.bracingSectionsFinal.map(e => e.clone());
  }
};
