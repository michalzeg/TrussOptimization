import { TrussStructure } from "../truss/truss-structure";
import * as _ from "lodash";
import { Point } from "../truss/point";
import { TrussElement } from "../truss/truss-element";

import ElementLine from "@/shared/element-line";
import ElementPoint from "@/shared/element-point";

export default class TrussDrawingData {
  private points: Point[];
  private maxY: number;
  private minY: number;
  private maxX: number;
  private minX: number;

  constructor(private truss: TrussStructure) {
    this.points = this.calculatePoints();
    const xs = this.points.map(p => p.y);
    const ys = this.points.map(p => p.x);
    this.maxY = Math.max(...xs);
    this.minY = Math.min(...xs);
    this.maxX = Math.max(...ys);
    this.minX = Math.min(...ys);
  }

  get bottomChordElements(): ElementLine[] {
    const result = this.convertToLine(this.truss.bottomChord, "bottom");
    return result;
  }
  get topChordElements(): ElementLine[] {
    const result = this.convertToLine(this.truss.topChord, "top");
    return result;
  }
  get bracingElements(): ElementLine[] {
    const result = this.convertToLine(this.truss.bracing, "bracing");
    return result;
  }
  get bottomChordNodes(): ElementPoint[] {
    const result = this.convertToNode(this.truss.bottomChord, "bottom");
    return result;
  }
  get topChordNodes(): ElementPoint[] {
    const result = this.convertToNode(this.truss.topChord, "top");
    return result;
  }
  get bracingNodes(): ElementPoint[] {
    const result = this.convertToNode(this.truss.bracing, "bracing");
    return result;
  }

  private convertToLine(elements: TrussElement[], type: string): ElementLine[] {
    return elements.map(e => new ElementLine(e.startPoint, e.endPoint, type));
  }

  private convertToNode(
    elements: TrussElement[],
    type: string
  ): ElementPoint[] {
    return elements
      .map(e => [
        ElementPoint.fromPoint(e.startPoint, type),
        ElementPoint.fromPoint(e.endPoint, type)
      ])
      .reduce((prev, curr) => [...prev, ...curr]);
  }

  get centre(): Point {
    const xc = this.minX + this.width / 2;
    const yc = this.minY + this.height / 2;
    return new Point(xc, yc);
  }

  get height(): number {
    return this.maxY - this.minY;
  }

  get width(): number {
    return this.maxX - this.minX;
  }

  private calculatePoints(): Point[] {
    const result = [
      ...this.truss.bottomChord,
      ...this.truss.bracing,
      ...this.truss.topChord
    ]
      .map(e => [e.endPoint, e.startPoint])
      .reduce((prev, curr) => [...prev, ...curr]);
    return result;
  }
}
