import { TrussStructure } from "../truss/truss-structure";

export default interface TrussType {
  readonly name: string;
  getTrussStructure(
    length: number,
    height: number,
    load: number
  ): TrussStructure;
}
