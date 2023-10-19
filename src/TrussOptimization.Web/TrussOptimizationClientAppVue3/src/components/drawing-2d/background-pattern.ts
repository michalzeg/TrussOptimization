import SVG from "svg.js";

const patternColor = "LightGrey";
export default function backgroundPattern(
  canvas: SVG.Doc,
  width: number,
  height: number,
  patternSize: number
) {
  const correctedWidth = Math.floor(width / patternSize) * patternSize;
  const correctedHeight = Math.floor(height / patternSize) * patternSize;

  const patternCentre = patternSize / 2;
  const pattern = canvas?.pattern(patternSize, patternSize, add => {
    add
      .line(0, patternCentre, patternSize, patternCentre)
      .stroke({ width: 1, color: patternColor });
    add
      .line(patternCentre, 0, patternCentre, patternSize)
      .stroke({ width: 1, color: patternColor });
  });
  const rectangle = canvas?.rect(correctedWidth, correctedHeight).fill(pattern);
}
