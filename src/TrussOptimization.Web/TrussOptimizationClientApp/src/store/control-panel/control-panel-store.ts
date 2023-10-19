import { Store } from "vuex";

import { SectionsDataState } from "../sections-data/state";
import { GeneratorModalState } from "../generator-modal/state";
import { ControlPanelState } from "./state";
import Material from "@/core/material/material";
import CalculationsInput from "@/core/calculations/calculations-input";
import CalculationsResult from "@/core/calculations/calculations-result";
import TrussSections from "@/shared/sections/truss-sections";
import { CalculationsState } from "@/core/calculations/calculations-state";

export default class ControlPanelStore {
  private store: Store<any>;
  private controlPanelState: ControlPanelState;
  private sectionsState: SectionsDataState;
  private generatorState: GeneratorModalState;
  constructor(store: Store<any>) {
    this.store = store;
    this.controlPanelState = store.state.controlPanelModule;
    this.sectionsState = store.state.sectionsDataModule;
    this.generatorState = store.state.generatorModalModule;
  }

  toggleGeneratorModal(): void {
    this.store.dispatch("toggleGeneratorModal");
  }

  isGeneratorModalOpen(): boolean {
    return this.controlPanelState.isGeneratorOpened;
  }

  saveChanges() {
    this.store.dispatch("saveChanges");
  }

  cancelChanges() {
    this.store.dispatch("cancelChanges");
  }

  clearResults() {
    this.store.dispatch("clearResults");
  }

  setErrorState() {
    this.store.dispatch("setCalculationsState", CalculationsState.error);
  }
  setDirtyState() {
    this.store.dispatch("setCalculationsState", CalculationsState.dirty);
  }
  setValidState() {
    this.store.dispatch("setCalculationsState", CalculationsState.valid);
  }
  setProgressState() {
    this.store.dispatch("setCalculationsState", CalculationsState.progress);
  }
  setLoadingState() {
    this.store.dispatch("setCalculationsState", CalculationsState.loading);
  }

  get calculationsState(): CalculationsState {
    return this.controlPanelState.calculationsState;
  }

  getCalculationsInput(): CalculationsInput {
    const result = {
      trussMaterial: Material.default,
      trussStructure: this.generatorState.activeTruss.getTrussStructure(
        this.generatorState.lengthFinal,
        this.generatorState.heightFinal,
        this.generatorState.loadFinal
      ),
      topChordSections: this.sectionsState.topSectionsFinal.map(e =>
        e.getSectionBoundary()
      ),
      bottomChordSections: this.sectionsState.bottomSectionsFinal.map(e =>
        e.getSectionBoundary()
      ),
      bracingChordSections: this.sectionsState.bracingSectionsFinal.map(e =>
        e.getSectionBoundary()
      )
    };
    return result;
  }

  setResults(result: CalculationsResult) {
    const topType = this.sectionsState.section.getSectionType(
      result.topChordResult.sectionName
    );
    const bracingType = this.sectionsState.section.getSectionType(
      result.bracingResult.sectionName
    );
    const bottomType = this.sectionsState.section.getSectionType(
      result.bottomChordResult.sectionName
    );

    const types = new TrussSections(topType, bracingType, bottomType);
    this.store.dispatch("setTrussSectionsForDrawing3d", types);
    this.store.dispatch("addCalculationsResult", result);
  }

  get totalWeightProgress(): string[] {
    return this.controlPanelState.calculationsProgress.map(e =>
      e.totalWeight.toFixed(0)
    );
  }

  get maxStressProgress(): string[] {
    return this.controlPanelState.calculationsProgress.map(e =>
      e.absStress.toFixed(0)
    );
  }

  get labels(): number[] {
    return this.controlPanelState.calculationsProgress.map((v, i) => i);
  }

  get absStress(): string {
    if (this.controlPanelState.calculationsProgress.length === 0) {
      return "";
    }
    return (
      this.controlPanelState.calculationsProgress
        .slice(-1)[0]
        .absStress.toFixed(0) || ""
    );
  }

  get maxStress(): number {
    if (this.controlPanelState.calculationsProgress.length === 0) {
      return 0;
    }
    return (
      this.controlPanelState.calculationsProgress.slice(-1)[0].maxStress || 0
    );
  }

  get minStress(): number {
    if (this.controlPanelState.calculationsProgress.length === 0) {
      return 0;
    }
    return (
      this.controlPanelState.calculationsProgress.slice(-1)[0].minStress || 0
    );
  }

  get totalWeight(): string {
    if (this.controlPanelState.calculationsProgress.length === 0) {
      return "";
    }
    return (
      this.controlPanelState.calculationsProgress
        .slice(-1)[0]
        .totalWeight.toFixed(0) || ""
    );
  }

  get lastResult(): CalculationsResult {
    return this.controlPanelState.calculationsProgress.slice(-1)[0];
  }
}
