import * as THREE from "three";
import { Point } from "../truss/point";

const supportMaterial = new THREE.MeshPhongMaterial({ color: 0xffff00 });
const scale = 0.2;
const height = 2;
const radious = 1;
const segments = 10;
function supportTemplate(point: Point) {
  const geometry = new THREE.ConeBufferGeometry(radious, height, segments);
  geometry.scale(scale, scale, scale);

  const cone = new THREE.Mesh(geometry, supportMaterial);
  cone.translateY((-height * scale) / 2);
  cone.translateX(point.x);
  cone.translateY(point.y);

  return cone;
}

export function support0deg(point: Point) {
  const support = supportTemplate(point);
  return support;
}

export function support90deg(point: Point) {
  const support = supportTemplate(point);
  support.rotateZ(Math.PI / 2);
  support.translateX(radious * scale);
  support.translateY((-height * scale) / 2);

  return support;
}

export function support180deg(point: Point) {
  const support = supportTemplate(point);
  support.rotateZ(Math.PI);

  support.translateY(-height * scale);
  return support;
}

export function support270deg(point: Point) {
  const support = supportTemplate(point);
  support.rotateZ(-Math.PI * 0.5);

  support.translateY((-height / 2) * scale);
  support.translateX(-radious * scale);
  return support;
}
