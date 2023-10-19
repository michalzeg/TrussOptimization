import almostEqual from "almost-equal";

export class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  move(dx: number, dy: number) {
    return new Point(this.x + dx, this.y + dy);
  }

  mirror(yAxis: number) {
    const newX = 2 * yAxis - this.x;
    return new Point(newX, this.y);
  }

  scale(value: number) {
    return new Point(this.x * value, this.y * value);
  }

  equals(other: Point, epsilon = almostEqual.FLT_EPSILON) {
    return (
      almostEqual(this.x, other.x, epsilon, epsilon) &&
      almostEqual(this.y, other.y, epsilon, epsilon)
    );
  }
}

export function pointComparer(
  point1: Point,
  point2: Point,
  epsilon = almostEqual.FLT_EPSILON
) {
  return point1.equals(point2, epsilon);
}
