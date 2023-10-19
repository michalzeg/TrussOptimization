import TrussType from "./truss-type";
import TrussType2Generator from "../truss-generator/truss-type-2-generator";
import { TrussStructure } from "../truss/truss-structure";

export default class TrussType2 implements TrussType {
  name = "truss-2";
  getTrussStructure(
    length: number,
    height: number,
    load: number
  ): TrussStructure {
    return TrussType2Generator(length, height, load);
  }
}
