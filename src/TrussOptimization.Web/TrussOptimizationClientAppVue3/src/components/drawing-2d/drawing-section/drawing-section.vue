<template>
  <div class="drawing" ref="drawing"></div>
</template>

<script setup lang="ts">
import SectionDrawingData from "@/core/drawing/section-drawing-data";
import { SectionDrawingHelper } from "./section-drawing-helper";
import { onMounted, ref, watch } from "vue";
const color = "#054072";
const stroke = 3;
const fill = "#337ab7";
const opacity = 0.9;


const props = defineProps<{ section: SectionDrawingData }>();

const drawingHelper = new SectionDrawingHelper(props.section);
const drawing = ref<HTMLElement | null>(null);


watch(props,(newVal, oldVal)=>{
  drawingHelper.changeSection(props.section);
  draw();
})

onMounted(()=>{
  drawingHelper.createCanvas(drawing.value);
  draw();
});


function draw() {
  drawingHelper.clear();
  drawingHelper.canvas
    ?.polyline(drawingHelper.transferArray(props.section.points))
    .stroke({ color, width: stroke })
    .fill({ color: fill, opacity });

}

</script>
<style lang="scss" scoped></style>


