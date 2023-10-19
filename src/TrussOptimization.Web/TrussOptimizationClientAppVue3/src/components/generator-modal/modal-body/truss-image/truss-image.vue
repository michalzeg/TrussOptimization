<template>
  <div class="panel panel-default">
    <drawing-truss></drawing-truss>
  </div>
</template>

<script setup lang="ts">
import DrawingTruss from "../../../drawing-2d/drawing-truss/drawing-truss.vue";
</script>
<style lang="scss" scoped>
div {
  &.panel {
    &.panel-default {
      padding: 10px;
    }
  }
}
</style>

