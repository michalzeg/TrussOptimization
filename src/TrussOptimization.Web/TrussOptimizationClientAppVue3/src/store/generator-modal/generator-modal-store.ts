import { Store } from "vuex";
import TrussType from "@/core/truss-types/truss-type";
import { TrussStructure } from "@/core/truss/truss-structure";
import TrussDrawingData from "@/core/drawing/truss-drawing-data";
import { AccordionState, AccordionStateUtils } from "@/shared/accordionState";

export default class GeneratorModalStore {
  private store: Store<any>;
  private generatorModalState: any;
  constructor(store: Store<any>) {
    this.store = store;
    this.generatorModalState = store.state.generatorModalModule;
  }

  fetchSections(): void {
    this.store.dispatch(`fetchSection`);
  }

  getTrussTypes(): string[] {
    return this.generatorModalState.trussTypes.map((e: { name: any; }) => e.name);
  }

  setActiveTruss(value: string): void {
    this.store.dispatch("setActiveTruss", value);
  }

  setLength(value: number) {
    this.store.dispatch("setLength", value);
  }
  setHeight(value: number) {
    this.store.dispatch("setHeight", value);
  }
  setLoad(value: number) {
    this.store.dispatch("setLoad", value);
  }

  setValid(value: boolean) {
    this.store.dispatch("setValid", value);
  }

  isActiveTruss(trussName: string): boolean {
    return this.store.getters.isActiveTruss(trussName);
  }

  getLength(): number {
    return this.generatorModalState.length;
  }

  getHeight(): number {
    return this.generatorModalState.height;
  }

  getLoad(): number {
    return this.generatorModalState.load;
  }

  getActiveTruss(): TrussType {
    return this.generatorModalState.activeTruss;
  }

  getTrussStructure(): TrussStructure {
    return this.generatorModalState.activeTruss.getTrussStructure(
      this.generatorModalState.length,
      this.generatorModalState.height,
      this.generatorModalState.load
    );
  }

  getTrussDrawingData(): TrussDrawingData {
    return new TrussDrawingData(this.getTrussStructure());
  }

  getIsValid(): boolean {
    return this.generatorModalState.isValid;
  }

  getCurrentTab(): AccordionState {
    return this.generatorModalState.currentTab;
  }

  getCurrentTabs(): boolean[] {
    const currentTab = this.getCurrentTab();
    return AccordionStateUtils.accordionStateArray.map(e => e === currentTab);
  }

  setCurrentTab(tab: AccordionState) {
    this.store.dispatch("setCurrentTab", tab);
  }

  onChange(callBack: () => void) {
    this.store.watch(state => state.generatorModalModule.length, callBack);
    this.store.watch(state => state.generatorModalModule.height, callBack);
    this.store.watch(state => state.generatorModalModule.activeTruss, callBack);
    this.store.watch(state => state.generatorModalModule.currentTab, callBack);
  }
}
