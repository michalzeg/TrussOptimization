<script lang="ts">
import { Component, Prop, Watch } from "vue-property-decorator";
import VueDrawingBase from "@/components/drawing-2d/vue-drawing-base.vue";
import { Point } from "@/core/truss/point";
import SectionDrawingData from "@/core/drawing/section-drawing-data";
import DrawingOptions from "@/components/drawing-2d/drawing-options";
const color = "#054072";
const stroke = 3;
const fill = "#337ab7";
const opacity = 0.9;
@Component({})
export default class DrawingSection extends VueDrawingBase {
  @Prop() section!: SectionDrawingData;

  constructor() {
    super(DrawingOptions.SectionDrawingOptions);
  }

  @Watch("section")
  onSectionChanged(val: string, oldVal: string) {
    this.draw();
  }

  mounted() {
    this.mounted();
    this.draw();
  }

  draw() {
    this.clear();
    this.canvas
      .polyline(this.transferArray(this.section.points))
      .stroke({ color, width: stroke })
      .fill({ color: fill, opacity });
  }

  protected getDrawingHeight(): number {
    return this.section.height;
  }
  protected getDrawingWidth(): number {
    return this.section.width;
  }

  protected getDrawingCentre(): Point {
    return this.section.center;
  }
}
</script>
<style  scoped>
</style>

<template>
  <div class="drawing"></div>
</template>
