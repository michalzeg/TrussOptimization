<template>
  <div id="app" class="container-fluid">
    <h2 class="py">TRUSS OPTIMIZATION CALCULATOR</h2>
    <h4 class="pb">
      The calculator finds such sections of the truss so that the weight of the structure is the lowest.
    </h4>
    <generator-modal></generator-modal>
    <div class="row">
      <control-panel></control-panel>
    </div>
    <div class="row">
      <drawing3d></drawing3d>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ControlPanel from "./components/control-panel/control-panel.vue";
import GeneratorModal from "./components/generator-modal/generator-modal.vue";
import Drawing3d from "./components/drawing-3d/drawing-3d.vue";
export default Vue.extend({
  components: {
    ControlPanel,
    GeneratorModal,
    Drawing3d
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input.invalid {
  border-color: crimson !important;
  border-style: solid !important;
  border-width: thin !important;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(220, 20, 60, 0.6) !important;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(220, 20, 60, 0.6) !important;
}

.row-eq-height {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.modal-dialog.modal-lg {
  margin: 80px auto;
}

.py {
  padding-top: 5px;
  padding-bottom: 5px;
}

.pb {
  padding-bottom: 10px;
}
</style>
