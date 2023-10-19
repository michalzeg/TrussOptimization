import TrussType from "./truss-type";
import { TrussStructure } from "../truss/truss-structure";
import TrussType1Generator from "../truss-generator/truss-type-1-generator";

export default class TrussType1 implements TrussType {
  name = "truss-1";

  getTrussStructure(
    length: number,
    height: number,
    load: number
  ): TrussStructure {
    return TrussType1Generator(length, height, load);
  }
}
