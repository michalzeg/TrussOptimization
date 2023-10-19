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
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ProgressBar from "./progress-bar/progress-bar.vue";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import { CalculationsState } from "@/core/calculations/calculations-state";
import getStatusMessage from "./status-message";
@Component({
  components: { ProgressBar }
})
export default class StatusBar extends Vue {
  private controlPanelStore = new ControlPanelStore(this.$store);

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

  get message(): string {
    return getStatusMessage(this.controlPanelStore.calculationsState);
  }
}
</script>
<style scoped>
.vcenter {
  display: flex;
  align-items: center;
}
</style>

