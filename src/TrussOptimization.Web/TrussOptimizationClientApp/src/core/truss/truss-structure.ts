import { TrussLoad } from "./truss-load";
import { TrussElement } from "./truss-element";
import { Point } from "./point";
export class TrussStructure {
  topChord: TrussElement[];
  bottomChord: TrussElement[];
  bracing: TrussElement[];
  loads: TrussLoad[];
  support1: Point;
  support2: Point;

  constructor(
    topChord: TrussElement[],
    bottomChord: TrussElement[],
    bracing: TrussElement[],
    loads: TrussLoad[],
    support1: Point,
    support2: Point
  ) {
    this.topChord = topChord;
    this.bottomChord = bottomChord;
    this.bracing = bracing;
    this.loads = loads;
    this.support1 = support1;
    this.support2 = support2;
  }
}
