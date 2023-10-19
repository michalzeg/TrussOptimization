<template>
  <div class="col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">View 3D</h3>
      </div>
      <div class="panel-body view-3d" id="panelBody">
        <div id="drawing3d"></div>
        <div v-bind:class="{hidden: legendHidden}" id="legend"></div>
        <section-detail></section-detail>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ThreeJsCreator from "./three-js-creator";
import Drawing3dStore from "@/store/drawing-3d/drawing-3d-store";
import Drawing3dCreator from "@/core/drawing-3d/drawing-3d-creator";
import SectionDetail from "./section-detail/section-detail.vue";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import LegendCreator from "@/components/drawing-3d/legend-creator";
import ColorProvider from "@/core/drawing-3d/coloring/color-provider";
import { CalculationsState } from "@/core/calculations/calculations-state";
import ResultColorProvider from "@/core/drawing-3d/coloring/result-color-provider";
import EmptyColorProvider from "@/core/drawing-3d/coloring/empty-color-provider";
import StressProvider from "@/core/drawing-3d/coloring/stress-provider";
import EmptyStressProvider from "@/core/drawing-3d/coloring/empty-stress-provider";
import ResultStressProvider from "@/core/drawing-3d/coloring/result-stress-provider";
@Component({
  components: {
    SectionDetail
  }
})
export default class Drawing3d extends Vue {
  private drawingStore = new Drawing3dStore(this.$store);
  private controlPanelStore = new ControlPanelStore(this.$store);
  private threeJsCreator = new ThreeJsCreator();
  private legendCreator = new LegendCreator();

  mounted() {
    this.threeJsCreator.create();
    this.legendCreator.create();
    this.generateElements();
    this.drawingStore.onChange(this.generateElements);
  }

  private generateElements() {
    this.threeJsCreator.clear();

    const colorProvider = this.getColorProvider();
    const stressProvider = this.getStressProvider();

    const drawingCreator = new Drawing3dCreator(
      this.drawingStore.getTrussStructure(),
      this.drawingStore.getTrussSections(),
      colorProvider,
      stressProvider
    );
    const elements = drawingCreator.getElements();
    this.threeJsCreator.addElements(elements);
    this.legendCreator.update(
      this.controlPanelStore.minStress,
      this.controlPanelStore.maxStress
    );
  }

  private getColorProvider(): ColorProvider {
    const result =
      this.controlPanelStore.calculationsState === CalculationsState.progress
        ? new ResultColorProvider(this.legendCreator)
        : new EmptyColorProvider();
    return result;
  }
  private getStressProvider(): StressProvider {
    const result =
      this.controlPanelStore.calculationsState === CalculationsState.progress
        ? new ResultStressProvider(this.controlPanelStore.lastResult)
        : new EmptyStressProvider();
    return result;
  }

  get legendHidden() {
    return (
      this.controlPanelStore.calculationsState === CalculationsState.error ||
      this.controlPanelStore.calculationsState === CalculationsState.dirty ||
      this.controlPanelStore.calculationsState === CalculationsState.loading
    );
  }
}
</script>

<style scoped>
.view-3d {
  position: relative;
  background-color: #f5f5f5;
}
#legend {
  z-index: 5;
  position: absolute;
  left: 0;
  top: 0;
}
.hidden {
  visibility: hidden;
}
</style>