import * as THREE from "three";
import ColorProvider from "./color-provider";
import LegendCreator from "@/components/drawing-3d/legend-creator";

export default class ResultColorProvider implements ColorProvider {
  constructor(private legend: LegendCreator) {}

  applyColor(value: number): string {
   
    const color = this.legend.getColor(value);
    return color;
   
  }
}
