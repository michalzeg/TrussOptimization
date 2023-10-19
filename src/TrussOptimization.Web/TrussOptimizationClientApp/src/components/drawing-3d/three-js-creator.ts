import * as THREE from "three";
import * as Stats from "stats-js";
import { CanvasHelper } from "./canvas-helper";
import * as OrbitControlsImport from "three-orbit-controls";
import env from "@/core/env/env";
// tslint:disable-next-line:no-duplicate-imports
import { OrbitControls as OrbitControlsType } from "three";
import createLut from "./legend-creator";
const OrbitControls = OrbitControlsImport(THREE);

const canvasId = "drawing3d";
const widthHeightRatio = 3;

export default class ThreeJsCreator {
  private canvasHelper!: CanvasHelper;
  private canvas!: HTMLElement;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private stats!: Stats;
  private controls!: OrbitControlsType;
  private renderer!: THREE.WebGLRenderer;

  // tslint:disable-next-line:no-empty
  public tickAnimation = () => {};

  public create(): void {
    this.addCanvas();
    this.addCamera();
    this.addLighting();
    this.addStats();
    this.addAxes();

    const animate = () => {
      requestAnimationFrame(animate);

      this.tickAnimation();
      this.controls.update();
      this.renderer.render(this.scene, this.camera);
      this.stats.update();
    };

    animate();
  }

  public getScene(): THREE.Scene {
    return this.scene;
  }

  public addElements(elements: THREE.Mesh[]): void {
    this.scene.add(...elements);
  }

  public clear() {
    const geometryObjects = this.scene.children.filter(
      e => e.type === "Mesh" || e.type === "Group"
    );
    for (const geometry of geometryObjects) {
      this.scene.remove(geometry);
    }
  }

  private addCanvas() {
    this.canvas = document.getElementById(canvasId) as HTMLElement;
    this.canvasHelper = new CanvasHelper(this.canvas, widthHeightRatio);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf5f5f5);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.canvasHelper.width, this.canvasHelper.height);
    this.canvas.appendChild(this.renderer.domElement);
  }

  private addCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      45,
      this.canvasHelper.widthHeightRatio,
      0.1,
      100
    );
    this.camera.position.z = 20;
    this.camera.position.x = 0;
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    if (!env.isProduction) {
      const helper = new THREE.CameraHelper(this.camera);
      this.scene.add(helper);
    }
  }

  private addAxes(): void {
    if (env.isProduction) {
      return;
    }
    const sphereAxis = new THREE.AxesHelper(200);
    this.scene.add(sphereAxis);
  }

  private addStats(): void {
    if (env.isProduction) {
      this.stats = {};
      // tslint:disable-next-line:no-empty
      this.stats.update = () => {};
      return;
    }
    const panelBody = document.getElementById("panelBody");
    this.stats = new Stats();
    this.stats.domElement.style.position = "absolute";
    this.stats.domElement.style.left = "200px";
    this.stats.domElement.style.top = "0px";
    panelBody!.appendChild(this.stats.domElement);
  }

  private addLighting(): void {
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight1.position.set(0, 10, 10);
    directionalLight1.target.position.set(0, 0, 0);
    this.scene.add(directionalLight1);
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight2.position.set(0, -10, 10);
    directionalLight2.target.position.set(0, 0, 10);
    this.scene.add(directionalLight2);
    // const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    // this.scene.add(light);
    if (!env.isProduction) {
      const helper1 = new THREE.DirectionalLightHelper(
        directionalLight1,
        5,
        "#985f0d"
      );
      this.scene.add(helper1);
      const helper2 = new THREE.DirectionalLightHelper(
        directionalLight2,
        10,
        "#985f0d"
      );
      this.scene.add(helper2);
    }
  }
}
