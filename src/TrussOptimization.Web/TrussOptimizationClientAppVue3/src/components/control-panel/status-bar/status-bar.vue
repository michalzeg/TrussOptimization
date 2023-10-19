<template>
  <div class="row vcenter">
    <div class="col-xs-2" v-if="progress">
      <progress-bar></progress-bar>
    </div>
    <div :class="{'col-xs-10':progress,'col-xs-12':!progress}">
      <div
        class="alert"
        :class="{'alert-success':valid,'alert-warning':dirty,'alert-danger':error,'alert-info':progress}"
        role="alert"
      >
        <div class="row">
          <div class="col-xs-12">{{message}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {  computed } from 'vue';
import ProgressBar from "./progress-bar/progress-bar.vue";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import { CalculationsState } from "@/core/calculations/calculations-state";
import getStatusMessage from "./status-message";
import { useStore } from 'vuex';

const controlPanelStore = new ControlPanelStore(useStore());

const progress = computed(() => {
  return (
    controlPanelStore.calculationsState === CalculationsState.progress ||
    controlPanelStore.calculationsState === CalculationsState.loading
  );
});

const dirty = computed(() => {
  return controlPanelStore.calculationsState === CalculationsState.dirty;
});

const error = computed(() => {
  return controlPanelStore.calculationsState === CalculationsState.error;
});

const valid = computed(() => {
  return controlPanelStore.calculationsState === CalculationsState.valid;
});

const message = computed(() => {
  return getStatusMessage(controlPanelStore.calculationsState);
});
</script>
<style scoped>
.vcenter {
  display: flex;
  align-items: center;
}
</style>

