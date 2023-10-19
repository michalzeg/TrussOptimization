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
                <div
                  class="btn btn-primary"
                  @click="openGeneratorModal()"
                  :disabled="progress"
                >Truss Generator</div>
              </div>
            </div>
            <div class="row form-group">
              <div class="col-xs-12">
                <button
                  class="btn btn-lg"
                  :class="{'btn-success':valid,'btn-warning':dirty,'btn-danger':error,'btn-info':progress}"
                  @click="calculate"
                  :disabled="progress"
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

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import StatusBar from "./status-bar/status-bar.vue";
import DetailsItem from "./details-item/details-item.vue";
import { CalculationsState } from "@/core/calculations/calculations-state";
import CalculationsService from "@/core/calculations/calculations-service";
@Component({
  components: {
    DetailsItem,
    StatusBar
  }
})
export default class ControlPanel extends Vue {
  private controlPanelStore = new ControlPanelStore(this.$store);
  private calculationsService = new CalculationsService(result =>
    this.controlPanelStore.setResults(result)
  );

  openGeneratorModal() {
    this.controlPanelStore.toggleGeneratorModal();
  }

  calculate() {
    this.controlPanelStore.setProgressState();
    this.controlPanelStore.clearResults();

    const input = this.controlPanelStore.getCalculationsInput();
    this.calculationsService
      .calculate(input)
      .then(result => this.controlPanelStore.setValidState())
      .catch(() => this.controlPanelStore.setErrorState());
  }

  get progress(): boolean {
    return (
      this.controlPanelStore.calculationsState === CalculationsState.progress ||
      this.controlPanelStore.calculationsState === CalculationsState.loading
    );
  }
  get dirty(): boolean {
    return this.controlPanelStore.calculationsState === CalculationsState.dirty;
  }
  get error(): boolean {
    return this.controlPanelStore.calculationsState === CalculationsState.error;
  }
  get valid(): boolean {
    return this.controlPanelStore.calculationsState === CalculationsState.valid;
  }
}
</script>

