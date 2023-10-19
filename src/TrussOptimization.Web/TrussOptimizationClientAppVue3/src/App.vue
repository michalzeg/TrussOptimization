<template>
  <div id="app" class="container-fluid">
    <generator-modal></generator-modal>
    <div class="row">
      <control-panel></control-panel>
    </div>
    <div class="row">
      <drawing3d></drawing3d>
    </div>
  </div>
</template>

<script setup lang="ts">
import ControlPanel from "./components/control-panel/control-panel.vue";
import GeneratorModal from "./components/generator-modal/generator-modal.vue";
import Drawing3d from "./components/drawing-3d/drawing-3d.vue";

</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input {
  &.invalid {
    border-color: crimson !important;
    border-style: solid !important;
    border-width: thin !important;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(220, 20, 60, 0.6) !important;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(220, 20, 60, 0.6) !important;
  }
}

.row-eq-height {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.modal-dialog {
  &.modal-lg {
    margin: 80px auto;
  }
}
</style>
