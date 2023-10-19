import TrussType from "./truss-type";
import { TrussStructure } from "../truss/truss-structure";
import TrussType4Generator from "../truss-generator/truss-type-4-generator";

export default class TrussType4 implements TrussType {
  name = "truss-4";

  getTrussStructure(
    length: number,
    height: number,
    load: number
  ): TrussStructure {
    return TrussType4Generator(length, height, load);
  }
}
