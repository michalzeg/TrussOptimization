import { TrussStructure } from "../truss/truss-structure";
import { TrussElement } from "../truss/truss-element";
import { Point } from "../truss/point";
import { TrussLoad } from "../truss/truss-load";

export default function TrussType2Generator(
  length: number,
  height: number,
  load: number,
  spans: number = 6
): TrussStructure {
  const spanLength = length / spans;
  const halfSpan = spans / 2;

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
    for (let index = -halfSpan; index < halfSpan; index++) {
      const x0 = index * spanLength;
      const x1 = (index + 1) * spanLength;
      const startPoint = new Point(x0, -height / 2);
      const endPoint = new Point(x1, -height / 2);
      result.push(new TrussElement(startPoint, endPoint));
    }
    return result;
  }
  function generateTopChord() {
    return [...bottomChord].map(e => e.move(0, height));
  }
  function generateBracing() {
    const result = new Array<TrussElement>();
    for (let index = -halfSpan; index < halfSpan; index++) {
      const x0 = index * spanLength;
      const x1 = (index + 1) * spanLength;
      const y0 = index % 2 === 0 ? -height / 2 : height / 2;
      const y1 = index % 2 === 0 ? height / 2 : -height / 2;
      const startPoint = new Point(x0, y0);
      const endPoint = new Point(x1, y1);
      result.push(new TrussElement(startPoint, endPoint));
    }
    for (let index = -halfSpan; index <= halfSpan; index++) {
      const x0 = index * spanLength;

      const startPoint = new Point(x0, -height / 2);
      const endPoint = new Point(x0, height / 2);
      result.push(new TrussElement(startPoint, endPoint));
    }
    return result;
  }

  function generateLoad() {
    const result = [...topChord]
      .map(e => [e.startPoint, e.endPoint])
      .reduce((prev, current) => [...prev, ...current])
      .map(e => e.x)
      .filter((value, index, array) => array.indexOf(value) === index)
      .map(x => new Point(x, height / 2))

      .map(p => new TrussLoad(-load, p));
    return result;
  }
}
