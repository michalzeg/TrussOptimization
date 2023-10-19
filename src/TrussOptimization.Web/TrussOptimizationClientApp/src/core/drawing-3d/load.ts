import * as THREE from "three";
import { Point } from "../truss/point";
const material = new THREE.MeshPhongMaterial({ color: 0x9370db });

const scale = 0.15;

const headRadious = 1;
const headHeight = 2;
const bodyRadious = 0.2;
const bodyHeight = 3;
const lengthScale = 1;

function createHead(x, y) {
  const geometry = new THREE.ConeBufferGeometry(headRadious, headHeight, 10);
  geometry.scale(scale, scale, scale);

  const cone = new THREE.Mesh(geometry, material);
  cone.translateY((-headHeight * scale) / 2);
  cone.translateX(x);
  cone.translateY(y);

  return cone;
}

function createBody(x, y) {
  const geometry = new THREE.CylinderBufferGeometry(
    bodyRadious,
    bodyRadious,
    bodyHeight * lengthScale,
    10
  );
  geometry.scale(scale, scale, scale);

  const cylinder = new THREE.Mesh(geometry, material);
  cylinder.translateY(
    (-bodyHeight / 2) * scale * lengthScale - headHeight * scale
  );
  cylinder.translateY(y);
  cylinder.translateX(x);

  return cylinder;
}

function pointLoadTemplate(x, y) {
  const group = new THREE.Group();
  const body = createBody(x, y);
  const head = createHead(x, y);
  group.add(body);
  group.add(head);
  return group;
}

function pointLoad0deg(point: Point) {
  const pointLoad = pointLoadTemplate(point.x, point.y);
  return pointLoad;
}

export function pointLoad90deg(point: Point) {
  const pointLoad = pointLoadTemplate(point.y, -point.x);
  pointLoad.rotateZ(Math.PI / 2);
  return pointLoad;
}

export function pointLoad180deg(point: Point) {
  const pointLoad = pointLoadTemplate(-point.x, -point.y);
  pointLoad.rotateZ(Math.PI);
  return pointLoad;
}
export function pointLoad270deg(point: Point) {
  const pointLoad = pointLoadTemplate(-point.y, point.x);
  pointLoad.rotateZ(-Math.PI / 2);
  return pointLoad;
}
