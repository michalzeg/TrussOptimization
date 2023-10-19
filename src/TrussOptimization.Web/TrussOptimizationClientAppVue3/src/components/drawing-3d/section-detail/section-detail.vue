<template>
  <div class="group">
    <div class="detail">
      <p>Top</p>
      <drawing-section :section="topSection"></drawing-section>
      <p>{{topChordName}}</p>
    </div>
    <div class="detail">
      <p>Bracing</p>
      <drawing-section :section="bracingSection"></drawing-section>
      <p>{{bracingName}}</p>
    </div>
    <div class="detail">
      <p>Bottom</p>
      <drawing-section :section="bottomSection"></drawing-section>
      <p>{{bottomChordName}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import Drawing3dStore from "@/store/drawing-3d/drawing-3d-store";
import DrawingSection from "@/components/drawing-2d/drawing-section/drawing-section.vue";
import { computed } from 'vue';

const drawingStore = new Drawing3dStore(useStore());

const topSection = computed(()=> drawingStore.getTopSectionDrawing());
const bottomSection = computed(()=> drawingStore.getBottomSectionDrawing());
const bracingSection = computed(()=> drawingStore.getBracingSectionDrawing());
const topChordName = computed(()=> drawingStore.getTopChordName());
const bottomChordName = computed(()=> drawingStore.getBottomChordName());
const bracingName = computed(()=> drawingStore.getBracingName());
</script>

<style lang="scss" scoped>
$background-color: #f5f5f5;
$border-color: #ddd;

.group {
  display: flex;
  flex-direction: row;

  position: absolute;
  right: 0;
  top: 0;
  background-color: $background-color;

  border-bottom-left-radius: 3px;
  border-bottom: 1px solid $border-color;
  border-left: 1px solid $border-color;
  & .detail {
    width: 100px;
    padding: 5px;

    &:not(:last-child) {
      border-right: 1px solid $border-color;
    }

    & p {
      text-align: center;
      margin: 0;
    }
  }
}
</style>
