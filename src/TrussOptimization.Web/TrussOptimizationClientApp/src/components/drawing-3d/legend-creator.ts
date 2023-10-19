import * as THREE from "three";
import * as OrbitControlsImport from "three-orbit-controls";
// tslint:disable-next-line:no-duplicate-imports
import { OrbitControls as OrbitControlsType } from "three";
const OrbitControls = OrbitControlsImport(THREE);
import getLookupTable from "./lookup-table.js";

const colorMap = "rainbow";
const numberOfColors = 20;

const sizeX = 100;
const sizeY = 250;
const cameraZ = 2.5;

const colorMax = 2000;
const colorMin = -1000;

export default class LegendCreator {
  private canvas!: HTMLElement;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;

  private lut!: any;

  public create() {
    this.initialize();
    this.generateTable(colorMin, colorMax);

    const animate = () => {
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }

  public clear() {
    while (this.scene.children.length > 0) {
      this.scene.remove(this.scene.children[0]);
    }
  }

  public getColor(value: number): string {
    const result = this.lut.getColor(value);
    return result;
  }

  public update(min: number, max: number) {
    this.clear();
    this.generateTable(min, max);
  }

  private generateTable(min: number, max: number) {
    this.lut = getLookupTable(colorMap, numberOfColors);
    this.lut.setMax(max);
    this.lut.setMin(min);

    const legend = this.lut.setLegendOn({
      position: { x: -0.2, y: 0, z: 0 }
    });

    const labels = this.lut.setLegendLabels({
      title: "Stress",
      um: "MPa",
      ticks: 5
    });
    this.scene.add(labels.title);
    this.scene.add(legend);

    for (let i = 0; i < Object.keys(labels.ticks).length; i++) {
      this.scene.add(labels.ticks[i]);
      this.scene.add(labels.lines[i]);
    }
  }

  private initialize() {
    this.canvas = document.getElementById("legend") as HTMLElement;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5f5f5);
    this.camera = new THREE.PerspectiveCamera(75, sizeX / sizeY, 0.1, 1000);
    this.camera.position.z = cameraZ;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(sizeX, sizeY);
    this.canvas.appendChild(this.renderer.domElement);
  }
}
