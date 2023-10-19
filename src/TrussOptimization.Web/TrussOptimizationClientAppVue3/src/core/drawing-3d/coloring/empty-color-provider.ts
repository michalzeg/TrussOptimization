import * as THREE from "three";
import ColorProvider from "./color-provider";

export default class EmptyColorProvider implements ColorProvider {
  // tslint:disable-next-line:no-empty
  applyColor(value: number): string {
    return "#3276b1";
  }
}
