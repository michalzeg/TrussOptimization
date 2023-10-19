import * as THREE from "three";
export default interface ColorProvider {
  applyColor(value: number): string;
}
