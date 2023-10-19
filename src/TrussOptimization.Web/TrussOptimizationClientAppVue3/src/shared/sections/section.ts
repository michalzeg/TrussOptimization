import SectionData from "./section-data";
import { Point } from "@/core/truss/point";
import SectionType from "./section-type";

export default class Section {
  static get Empty(): Section {
    return new Section({
      typeName: "",
      types: [
        {
          name: "",
          typeName: "",
          coordinates: [
            new Point(-100, -100),
            new Point(100, -100),
            new Point(100, 100),
            new Point(-100, 100),
            new Point(-100, -100)
          ],
          dimension: "",
          area: 0
        }
      ]
    });
  }
  constructor(private section: SectionData) {}

  getTypes(): SectionType[] {
    const result = this.section.types;
    return result;
  }

  get typeName(): string {
    return this.section.typeName;
  }

  get dimensionsNames(): string[] {
    return this.section.types.map(e => e.dimension);
  }

  getCoordinates(dimension: string): Point[] {
    const result = this.section.types
      .filter(e => e.dimension === dimension)
      .map(e => e.coordinates)[0];
    return result;
  }
}
