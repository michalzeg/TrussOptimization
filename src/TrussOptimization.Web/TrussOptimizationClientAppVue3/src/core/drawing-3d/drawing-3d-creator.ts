import { TrussStructure } from "../truss/truss-structure";
import TrussSections from "@/shared/sections/truss-sections";
import * as THREE from "three";
import getExtrudeSettings from "./extrude-settings";
import { Point } from "../truss/point";
import { TrussElement } from "../truss/truss-element";
import ColorProvider from "./coloring/color-provider";
import StressProvider from "./coloring/stress-provider";
import {  support0deg } from "./support";
import {  pointLoad180deg } from "./load";
const getMaterial = (color: string) =>
  new THREE.MeshLambertMaterial({
    // vertexColors: THREE.VertexColors,
    // side: THREE.DoubleSide,
    color
  });

const factor = 1000;

export default class Drawing3dCreator {
  constructor(
    private trussStructure: TrussStructure,
    private trussSections: TrussSections,
    private colorProvider: ColorProvider,
    private stressProvider: StressProvider
  ) {}

  public getElements(): THREE.Mesh[] {
    const top = this.createElements(
      this.trussSections.getTopChordCoordinates(),
      this.trussStructure.topChord
    );
    const bracing = this.createElements(
      this.trussSections.getBracingCoordinates(),
      this.trussStructure.bracing
    );
    const bottom = this.createElements(
      this.trussSections.getBottomChordCoordinates(),
      this.trussStructure.bottomChord
    );
    const supports = this.createSupports();
    const loads = this.createLoads();
    const result = [...top, ...bottom, ...bracing, ...supports, ...loads];
    return result;
  }

  private createSupports(): THREE.Mesh[] {
    const point1 = this.trussStructure.support1.scale(1 / factor);
    const point2 = this.trussStructure.support2.scale(1 / factor);
    const support1 = support0deg(point1);
    const support2 = support0deg(point2);
    return [support1, support2];
  }

  private createLoads(): THREE.Mesh[] {
    const loads = this.trussStructure.loads.map(load => {
      const point = load.position.scale(1 / factor);
      const pointLoad = pointLoad180deg(point);
      return (pointLoad as unknown) as THREE.Mesh;
    });
    return loads;
  }

  private createElements(
    sectionCoordinates: Point[],
    elements: TrussElement[]
  ): THREE.Mesh[] {
    const shape = this.getShape(sectionCoordinates);

    const meshes = elements.map(element => {
      const path = getElementPath(element);
      const settings = getExtrudeSettings(path);

      const stress = this.stressProvider.getStressValue(
        element.startPoint,
        element.endPoint
      );
      const color = this.colorProvider.applyColor(stress);

      const geometry = new THREE.ExtrudeBufferGeometry(shape, settings);

      const mesh = new THREE.Mesh(geometry, getMaterial(color));

      return mesh;
    });

    return meshes;
  }

  private getShape(coordinates: Point[]): THREE.Shape {
    const points = coordinates.map(
      p => new THREE.Vector2(p.x / factor, p.y / factor)
    );
    const shape = new THREE.Shape(points);
    return shape;
  }
}
function getElementPath(element: TrussElement): THREE.CurvePath<THREE.Vector3> {
  const line = new THREE.LineCurve3(
    new THREE.Vector3(
      element.startPoint.x / factor,
      element.startPoint.y / factor,
      0
    ),
    new THREE.Vector3(
      element.endPoint.x / factor,
      element.endPoint.y / factor,
      0
    )
  );
  const path = new THREE.CurvePath<THREE.Vector3>();
  path.add(line);
  return path;
}
