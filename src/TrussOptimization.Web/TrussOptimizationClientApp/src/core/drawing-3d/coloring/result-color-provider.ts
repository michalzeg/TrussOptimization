import * as THREE from "three";
import ColorProvider from "./color-provider";
import LegendCreator from "@/components/drawing-3d/legend-creator";

export default class ResultColorProvider implements ColorProvider {
  constructor(private legend: LegendCreator) {}

  applyColor(value: number): string {
    // const faces = mesh.geometry.faces;
    // mesh.geometry.colorsNeedUpdate = true;

    const color = this.legend.getColor(value);
    return color;
    // tslint:disable-next-line:prefer-for-of
    // for (let index = 0; index < faces.length; index++) {
    //   const face = faces[index];
    //   for (let i = 0; i < 3; i++) {
    //     face.vertexColors[i] = color;
    //   }
    // }
  }
}
