import * as THREE from "three";

export default function getExtrudeSettings(
  path: THREE.CurvePath<THREE.Vector3>
): THREE.ExtrudeGeometryOptions {
  return {
    steps: 12,
    bevelEnabled: false,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 1,
    extrudePath: path
  };
}
