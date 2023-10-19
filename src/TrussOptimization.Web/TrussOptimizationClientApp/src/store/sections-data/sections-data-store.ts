import { Store } from "vuex";
import TrussType from "@/core/truss-types/truss-type";
import { TrussStructure } from "@/core/truss/truss-structure";
import TrussDrawingData from "@/core/drawing/truss-drawing-data";
import Section from "@/shared/sections/section-data";
import SectionCollection from "@/shared/sections/section-collection";

export default class SectionsDataStore {
  private store: Store<any>;
  private sectionsDataState: any;
  private type: string;
  constructor(store: Store<any>, type: string) {
    this.store = store;
    this.type = type;
    this.sectionsDataState = this.store.state.sectionsDataModule;
  }

  addSection(): void {
    this.store.dispatch(`addSection`, this.addType({}));
  }
  removeSection(index: number): void {
    this.store.dispatch(`removeSection`, this.addType({ index }));
  }
  changeTypeName(payload: any): void {
    this.store.dispatch(`changeTypeName`, this.addType(payload));
  }
  changeMaxDimension(payload: any): void {
    this.store.dispatch(`changeMaxDimension`, this.addType(payload));
  }
  changeMinDimension(payload: any): void {
    this.store.dispatch(`changeMinDimension`, this.addType(payload));
  }
  getSectionNames(): string[] {
    const result = this.sections.map(e => e.name);
    return result;
  }

  getSections(): SectionCollection[] {
    return this.sections;
  }

  // tslint:disable-next-line:no-empty
  onChange(callBack: () => void) {}

  private addType(payload: any) {
    return { ...payload, type: this.type };
  }

  private get sections() {
    switch (this.type) {
      case "Top":
        return this.sectionsDataState.topSections;
        break;
      case "Bottom":
        return this.sectionsDataState.bottomSections;
        break;
      case "Bracing":
        return this.sectionsDataState.bracingSections;
        break;
    }
  }
}
