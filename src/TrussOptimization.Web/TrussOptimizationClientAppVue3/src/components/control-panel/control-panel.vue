<template>
  <div class="col-xs-12">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Control Panel</h3>
      </div>
      <div class="panel-body">
        <div class="container-fluid">
          <div class="col-xs-4">
            <div class="row form-group">
              <div class="col-xs-12">
                <button
                  class="btn btn-primary"
                  @click="openGeneratorModal"
                  :disabled="isCalculating"
                >Truss Generator</button>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-xs-12">
                <button
                  class="btn btn-lg"
                  :class="getStatusButtonClass"
                  @click="calculate"
                  :disabled="isCalculating"
                >
                  <span class="glyphicon glyphicon-cog"></span> Calculate
                </button>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-xs-12">
                <status-bar></status-bar>
              </div>
            </div>
          </div>
          <div class="col-xs-8">
            <details-item></details-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import StatusBar from "./status-bar/status-bar.vue";
import DetailsItem from "./details-item/details-item.vue";
import { CalculationsState } from "@/core/calculations/calculations-state";
import CalculationsService from "@/core/calculations/calculations-service";
import { useStore } from 'vuex';

const controlPanelStore = new ControlPanelStore(useStore());
const calculationsService = new CalculationsService(result =>
  controlPanelStore.setResults(result)
);

const isCalculating = ref(false);

const getStatusButtonClass = computed(() => {
  switch (controlPanelStore.calculationsState) {
    case CalculationsState.progress:
    case CalculationsState.loading:
      return 'btn-info';
    case CalculationsState.dirty:
      return 'btn-warning';
    case CalculationsState.error:
      return 'btn-danger';
    case CalculationsState.valid:
      return 'btn-success';
    default:
      return '';
  }
});

const openGeneratorModal = () => {
  controlPanelStore.toggleGeneratorModal();
};

const calculate = async () => {
  controlPanelStore.setProgressState();
  controlPanelStore.clearResults();

  const input = controlPanelStore.getCalculationsInput();
  isCalculating.value = true;
  
  try {
    await calculationsService.calculate(input);
    controlPanelStore.setValidState();
  } catch (error) {
    controlPanelStore.setErrorState();
  }

  isCalculating.value = false;
};

</script>

