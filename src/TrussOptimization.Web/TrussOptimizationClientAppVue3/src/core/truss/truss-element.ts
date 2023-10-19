import { Point } from "./point";

export class TrussElement {
  startPoint: Point;
  endPoint: Point;

  constructor(startPoint: Point, endPoint: Point) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  move(dx: number, dy: number): TrussElement {
    return new TrussElement(
      this.startPoint.move(dx, dy),
      this.endPoint.move(dx, dy)
    );
  }

  mirror(yAxis: number): TrussElement {
    return new TrussElement(
      this.startPoint.mirror(yAxis),
      this.endPoint.mirror(yAxis)
    );
  }

  equals(other: TrussElement): boolean {
    return (
      this.startPoint.equals(other.startPoint) &&
      this.endPoint.equals(other.endPoint)
    );
  }
}

export function trussElementComparer(
  element1: TrussElement,
  element2: TrussElement
): boolean {
  return element1.equals(element2);
}
