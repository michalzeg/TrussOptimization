import SectionType from "./section-type";
import { Point } from "@/core/truss/point";
import Section from "./section";


export default class TrussSections {
  public static get Empty(): TrussSections {
    const sectionType = Section.Empty.getTypes()[0];
    const result = new TrussSections(sectionType, sectionType, sectionType);
    return result;
  }

  constructor(
    private topChord: SectionType,
    private bracing: SectionType,
    private bottomChord: SectionType
  ) {}

  public getTopChordCoordinates(): Point[] {
    return this.topChord.coordinates;
  }

  public getBottomChordCoordinates(): Point[] {
    return this.bottomChord.coordinates;
  }

  public getBracingCoordinates(): Point[] {
    return this.bracing.coordinates;
  }

  public getTopChordName(): string {
    return this.topChord.name;
  }

  public getBottomChordName(): string {
    return this.bottomChord.name;
  }
  public getBracingName(): string {
    return this.bracing.name;
  }
}
