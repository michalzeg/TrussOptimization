import TrussType from "./truss-type";
import { TrussStructure } from "../truss/truss-structure";
import TrussType3Generator from "../truss-generator/truss-type-3-generator";

export default class TrussType3 implements TrussType {
  name = "truss-3";

  getTrussStructure(
    length: number,
    height: number,
    load: number
  ): TrussStructure {
    return TrussType3Generator(length, height, load);
  }
}
