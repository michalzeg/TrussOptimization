import { TrussStructure } from "../truss/truss-structure";
import { TrussElement, trussElementComparer } from "../truss/truss-element";
import { Point, pointComparer } from "../truss/point";
import Line from "@/shared/line";
import { TrussLoad } from "../truss/truss-load";
import * as _ from "lodash";
export default function TrussType5Generator(
  length: number,
  height: number,
  load: number,
  spans: number = 6
): TrussStructure {
  const halfSpan = spans / 2;
  const spanLength = length / spans;
  const yAxis = 0;
  const topChordLine = new Line(
    new Point(0, 0.5 * height),
    new Point(0.5 * length, -0.5 * height)
  );

  const bottomChord = generateBottomChord();
  const topChord = generateTopChord();
  const bracing = generateBracing();
  const support1 = new Point(-length / 2, -height / 2);
  const support2 = new Point(length / 2, -height / 2);
  const loads = generateLoad();

  return new TrussStructure(
    topChord,
    bottomChord,
    bracing,
    loads,
    support1,
    support2
  );

  function generateBottomChord() {
    const result = new Array<TrussElement>();
    for (let index = 0; index < halfSpan; index++) {
      const x0 = index * spanLength;
      const x1 = (index + 1) * spanLength;
      const startPoint = new Point(x0, -height / 2);
      const endPoint = new Point(x1, -height / 2);
      result.push(new TrussElement(startPoint, endPoint));
    }
    return [...result, ...result.map(e => e.mirror(yAxis))];
  }

  function generateTopChord() {
    const result = new Array<TrussElement>();

    for (let index = 0; index < halfSpan; index++) {
      const x0 = index * spanLength;
      const y0 = topChordLine.getY(x0);
      const x1 = (index + 1) * spanLength;
      const y1 = topChordLine.getY(x1);
      const startPoint = new Point(x0, y0);
      const endPoint = new Point(x1, y1);
      result.push(new TrussElement(startPoint, endPoint));
    }
    return [...result, ...result.map(e => e.mirror(yAxis))];
  }

  function generateBracing() {
    const elements = new Array<TrussElement>();
    for (let index = 0; index < halfSpan - 1; index++) {
      const x0 = index * spanLength;
      const x1 = (index + 1) * spanLength;
      const y0 = index % 2 === 0 ? topChordLine.getY(x0) : -height / 2;
      const y1 = index % 2 === 0 ? -height / 2 : topChordLine.getY(x1);
      const startPoint = new Point(x0, y0);
      const endPoint = new Point(x1, y1);
      elements.push(new TrussElement(startPoint, endPoint));
    }
    for (let index = 0; index < halfSpan; index++) {
      const x0 = index * spanLength;
      const y0 = topChordLine.getY(x0);

      const startPoint = new Point(x0, -height / 2);
      const endPoint = new Point(x0, y0);
      elements.push(new TrussElement(startPoint, endPoint));
    }
    // middle vertical bracing not mirrored
    const result = _.uniqWith(
      [...elements, ...elements.map(e => e.mirror(yAxis))],
      trussElementComparer
    );
    return result;
  }

  function generateLoad() {
    const points = [...topChord]
      .map(e => [e.startPoint, e.endPoint])
      .reduce((prev, current) => [...prev, ...current]);

    const result = _.unionWith(points, pointComparer)
      .sort((a, b) => a.x - b.x)
      .slice(1)
      .slice(0, -1)
      .map(p => new TrussLoad(-load, p));
    return result;
  }
}
