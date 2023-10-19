import { Store } from "vuex";
import { TrussStructure } from "@/core/truss/truss-structure";
import TrussSections from "@/shared/sections/truss-sections";
import { Drawing3dState } from "./state";
import SectionDrawingData from "@/core/drawing/section-drawing-data";

export default class Drawing3dStore {
  private store: Store<any>;
  private drawing3dState: Drawing3dState;

  constructor(store: Store<any>) {
    this.store = store;
    this.drawing3dState = store.state.drawing3dModule as Drawing3dState;
  }

  getTrussStructure(): TrussStructure {
    return this.drawing3dState.trussStructure;
  }

  getTrussSections(): TrussSections {
    return this.drawing3dState.trussSections;
  }

  getTopSectionDrawing(): SectionDrawingData {
    const coordinates = this.drawing3dState.trussSections.getTopChordCoordinates();
    return new SectionDrawingData(coordinates);
  }

  getBottomSectionDrawing(): SectionDrawingData {
    const coordinates = this.drawing3dState.trussSections.getBottomChordCoordinates();
    return new SectionDrawingData(coordinates);
  }

  getBracingSectionDrawing(): SectionDrawingData {
    const coordinates = this.drawing3dState.trussSections.getBracingCoordinates();
    return new SectionDrawingData(coordinates);
  }

  getTopChordName(): string {
    return this.drawing3dState.trussSections.getTopChordName();
  }
  getBottomChordName(): string {
    return this.drawing3dState.trussSections.getBottomChordName();
  }
  getBracingName(): string {
    return this.drawing3dState.trussSections.getBracingName();
  }
  onChange(callBack: () => void) {
    this.store.watch(state => state.drawing3dModule.trussStructure, callBack);
    this.store.watch(state => state.drawing3dModule.trussSections, callBack);
  }
}
