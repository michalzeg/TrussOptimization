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

<script setup lang="ts">
import { watch, onMounted, computed } from 'vue';
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
import { useStore } from 'vuex';

const drawingStore = new Drawing3dStore(useStore()); // Access the Vuex store using useStore
const controlPanelStore = new ControlPanelStore(useStore()); // Access the Vuex store using useStore

const threeJsCreator = new ThreeJsCreator();
const legendCreator = new LegendCreator();


const getColorProvider = (): ColorProvider => {
  const result =
    controlPanelStore.calculationsState === CalculationsState.progress
      ? new ResultColorProvider(legendCreator)
      : new EmptyColorProvider();
  return result;
};

const getStressProvider = (): StressProvider => {
  const result =
    controlPanelStore.calculationsState === CalculationsState.progress
      ? new ResultStressProvider(controlPanelStore.lastResult)
      : new EmptyStressProvider();
  return result;
};

const generateElements = () => {
  threeJsCreator.clear();

  const colorProvider = getColorProvider();
  const stressProvider = getStressProvider();

  const drawingCreator = new Drawing3dCreator(
    drawingStore.getTrussStructure(),
    drawingStore.getTrussSections(),
    colorProvider,
    stressProvider
  );
  const elements = drawingCreator.getElements();
  threeJsCreator.addElements(elements);
  legendCreator.update(
    controlPanelStore.minStress,
    controlPanelStore.maxStress
  );
};

// watch(
//   [drawingStore.getTrussStructure, drawingStore.getTrussSections],
//   generateElements
// );

onMounted(() => {
  threeJsCreator.create();
  legendCreator.create();
  generateElements();
  drawingStore.onChange(generateElements);
});

const legendHidden = computed(() => {
  return (
    controlPanelStore.calculationsState === CalculationsState.error ||
    controlPanelStore.calculationsState === CalculationsState.dirty ||
    controlPanelStore.calculationsState === CalculationsState.loading
  );
});
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