import { Point } from "../truss/point";

export default class SectionDrawingData {
  private minX: number;
  private maxX: number;
  private minY: number;
  private maxY: number;

  constructor(private coordinates: Point[]) {
    this.minX = Math.min(...coordinates.map(e => e.x));
    this.maxX = Math.max(...coordinates.map(e => e.x));
    this.minY = Math.min(...coordinates.map(e => e.y));
    this.maxY = Math.max(...coordinates.map(e => e.y));
  }

  get height(): number {
    return this.maxY - this.minY;
  }

  get width(): number {
    return this.maxX - this.minX;
  }

  get center(): Point {
    return new Point(this.minX + this.width / 2, this.minY + this.height / 2);
  }

  get points(): number[] {
    return this.coordinates
      .map(e => [e.x, e.y])
      .reduce((pre, cur) => [...pre, ...cur]);
  }
}
