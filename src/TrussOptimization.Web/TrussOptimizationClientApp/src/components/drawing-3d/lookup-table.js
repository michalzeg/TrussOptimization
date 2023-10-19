import * as THREE from "three";
import * as OrbitControlsImport from "three-orbit-controls";
import { OrbitControls as OrbitControlsType } from "three";
const OrbitControls = OrbitControlsImport(THREE);
import "three-lut";
import env from "@/core/env/env";

export default function getLookupTable(colorMap, numberOfColors) {
  const lut = new THREE.Lut(colorMap, numberOfColors);
  return lut;
}
