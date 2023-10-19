import { Point } from "./point";
export class TrussLoad {
  value: number;
  position: Point;

  constructor(value: number, position: Point) {
    this.value = value;
    this.position = position;
  }
}
