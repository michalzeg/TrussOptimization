<template>
  <div class="drawing" :class="className" ref="drawing"></div>
</template>

<script setup lang="ts">
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
import ElementLine from "@/shared/element-line";
import ElementPoint from "@/shared/element-point";
import { AccordionStateUtils } from "@/shared/accordionState";
import { getSortingStrategy } from "./sorting-strategy";
import { useStore } from "vuex";
import { TrussDrawingHelper } from "./truss-drawing-helper";
import { computed, onMounted, ref } from "vue";

const color = "#337ab7";
const stroke = 4;
const nodeSize = 15;

const store = new GeneratorModalStore(useStore());

const drawingHelper = new TrussDrawingHelper(store);

const drawing = ref<HTMLElement | null>(null);


onMounted(() => {
  drawingHelper.createCanvas(drawing.value);
  draw();
  store.onChange(() => draw());
});

const className = computed(() => AccordionStateUtils.getName(store.getCurrentTab()));


function draw(): void {
  drawingHelper.clear();

  const sorting = getSortingStrategy(store.getCurrentTab());
  const elements = sorting.sortElements(
    store.getTrussDrawingData().topChordElements,
    store.getTrussDrawingData().bottomChordElements,
    store.getTrussDrawingData().bracingElements
  );
  const nodes = sorting.sortNodes(
    store.getTrussDrawingData().topChordNodes,
    store.getTrussDrawingData().bottomChordNodes,
    store.getTrussDrawingData().bracingNodes
  );

  drawElement(elements);

  drawNode(nodes);
}

function drawElement(lines: ElementLine[]): void {
  for (const line of lines) {
    const points = drawingHelper.transferLine(line).toPointArray();
    drawingHelper.canvas
      ?.line(points)
      .stroke({ color, width: stroke })
      .addClass(line.type);
  }
}

function drawNode(nodes: ElementPoint[]): void {
  for (const node of nodes) {
    const point = drawingHelper.transferPoint(node);
    drawingHelper.canvas
      ?.circle(nodeSize)
      .center(point.x, point.y)
      .fill(color)
      .addClass(node.type);
  }
}

</script>


<style lang="scss">
$color: #d9534f;

.drawing {
  &.bottom {
    .bottom {
      stroke: $color;
      fill: $color;
    }
  }

  &.top {
    .top {
      stroke: $color;
      fill: $color;
    }
  }

  &.bracing {
    .bracing {
      stroke: $color;
      fill: $color;
    }
  }
}
</style>
