import TrussType from "./truss-type";
import { TrussStructure } from "../truss/truss-structure";
import TrussType5Generator from "../truss-generator/truss-type-5-generator";

export default class TrussType5 implements TrussType {
  name = "truss-5";

  getTrussStructure(
    length: number,
    height: number,
    load: number
  ): TrussStructure {
    return TrussType5Generator(length, height, load);
  }
}
