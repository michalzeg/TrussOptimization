import Section from "./section";
import SectionDrawingData from "@/core/drawing/section-drawing-data";
import SectionType from "./section-type";
import SectionBoundary from "./section-boundary";

export default class SectionCollection {
  private typeName: string;
  private maxDimension = "";
  private minDimension = "";

  constructor(private sections: Section[]) {
    this.typeName = this.getTypeNames()[0];
    this.update();
  }

  getSectionBoundary(): SectionBoundary {
    return {
      minSection: `${this.typeName} ${this.minDimension}`,
      maxSection: `${this.typeName} ${this.maxDimension}`
    };
  }

  getSectionType(sectionName: string): SectionType {
    const types = this.sections
      .map(e => e.getTypes())
      .reduce((prev, curr) => [...prev, ...curr]);

    const result = types.find(e => e.name === sectionName) || types[0];
    return result;
  }

  getMinSectionType(): SectionType {
    return this.getSectionType(this.minSectionName);
  }
  setTypeName(name: string) {
    this.typeName = name;
    this.update();
  }

  getTypeName(): string {
    return this.typeName;
  }

  setMaxDimension(value: string) {
    this.maxDimension = value;
  }
  setMinDimension(value: string) {
    this.minDimension = value;
  }

  clone(): SectionCollection {
    const result = new SectionCollection([...this.sections]);
    result.setTypeName(this.typeName);
    result.setMaxDimension(this.maxDimension);
    result.setMinDimension(this.minDimension);
    return result;
  }

  getTypeNames(): string[] {
    return this.sections.map(e => e.typeName);
  }

  getDimensionNames(): string[] {
    return this.sections
      .filter(e => e.typeName === this.typeName)
      .map(e => e.dimensionsNames)
      .reduce((pre, cur) => [...pre, ...cur]);
  }

  getMaxDimensionNames(): string[] {
    const minDimensionIndex = this.getDimensionNames().indexOf(
      this.minDimension
    );
    return this.getDimensionNames()
      .map((value, index) => ({ index, value }))
      .filter(e => e.index >= minDimensionIndex)
      .map(e => e.value);
  }

  getMinDimension(): string {
    return this.getDimensionNames()[0];
  }

  getMaxDimension(): string {
    return this.getDimensionNames()[this.getDimensionNames().length - 1];
  }

  getDrawingData(dimensions: string): SectionDrawingData {
    const coords = this.sections
      .filter(e => e.typeName === this.typeName)
      .map(e => e.getCoordinates(dimensions))[0];

    return new SectionDrawingData(coords);
  }

  getMinSectionDrawingData(): SectionDrawingData {
    return this.getDrawingData(this.minDimension);
  }
  getMaxSectionDrawingData(): SectionDrawingData {
    return this.getDrawingData(this.maxDimension);
  }

  private update() {
    this.minDimension = this.getMinDimension();
    this.maxDimension = this.getMaxDimension();
  }

  private get minSectionName(): string {
    return `${this.typeName} ${this.minDimension}`;
  }
}
