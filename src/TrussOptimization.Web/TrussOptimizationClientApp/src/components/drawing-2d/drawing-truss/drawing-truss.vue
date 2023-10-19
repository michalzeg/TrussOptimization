<script lang="ts">
import { Component } from "vue-property-decorator";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
import VueDrawingBase from "@/components/drawing-2d/vue-drawing-base.vue";
import { Point } from "@/core/truss/point";
import ElementLine from "@/shared/element-line";
import ElementPoint from "@/shared/element-point";
import DrawingOptions from "@/components/drawing-2d/drawing-options";
import { AccordionStateUtils } from "@/shared/accordionState";
import { getSortingStrategy } from "./sorting-strategy";
const color = "#337ab7";
const stroke = 4;
const nodeSize = 15;
@Component({})
export default class DrawingTruss extends VueDrawingBase {
  private store = new GeneratorModalStore(this.$store);

  constructor() {
    super(DrawingOptions.TrussDrawingOptions);
  }

  mounted() {
    this.mounted();
    this.draw();
    this.store.onChange(this.draw);
  }

  get className(): string {
    return AccordionStateUtils.getName(this.store.getCurrentTab());
  }

  protected getDrawingHeight(): number {
    const drawingData = this.store.getTrussDrawingData();
    return drawingData.height;
  }
  protected getDrawingWidth(): number {
    const drawingData = this.store.getTrussDrawingData();
    return drawingData.width;
  }

  protected getDrawingCentre(): Point {
    const drawingData = this.store.getTrussDrawingData();
    return drawingData.centre;
  }
  private draw(): void {
    this.clear();

    const sorting = getSortingStrategy(this.store.getCurrentTab());
    const elements = sorting.sortElements(
      this.store.getTrussDrawingData().topChordElements,
      this.store.getTrussDrawingData().bottomChordElements,
      this.store.getTrussDrawingData().bracingElements
    );
    const nodes = sorting.sortNodes(
      this.store.getTrussDrawingData().topChordNodes,
      this.store.getTrussDrawingData().bottomChordNodes,
      this.store.getTrussDrawingData().bracingNodes
    );

    this.drawElement(elements);

    this.drawNode(nodes);
  }

  private drawElement(lines: ElementLine[]): void {
    for (const line of lines) {
      const points = this.transferLine(line).toPointArray();
      this.canvas
        .line(points)
        .stroke({ color, width: stroke })
        .addClass(line.type);
    }
  }

  private drawNode(nodes: ElementPoint[]): void {
    for (const node of nodes) {
      const point = this.transferPoint(node);
      const circle = this.canvas
        .circle(nodeSize)
        .center(point.x, point.y)
        .fill(color)
        .addClass(node.type);
    }
  }
}
</script>
<style>

.drawing.bottom .bottom {
  stroke: #d9534f;
  fill: #d9534f;
}
.drawing.top .top {
  stroke: #d9534f;
  fill: #d9534f;
}
.drawing.bracing .bracing {
  stroke: #d9534f;
  fill: #d9534f;
}
</style>

<template>
  <div class="drawing" :class="className"></div>
</template>
