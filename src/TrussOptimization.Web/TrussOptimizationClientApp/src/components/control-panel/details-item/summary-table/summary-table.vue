<template>
  <table class="table">
    <thead>
      <tr>
        <th class="text-left">Summary</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Weight</td>
        <td>
          <i>{{totalWeight}}</i>
        </td>
        <td>
          <i>[kg]</i>
        </td>
      </tr>
      <tr>
        <td>Max Stress</td>
        <td>
          <i>{{absStress}}</i>
        </td>
        <td>
          <i>[MPa]</i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
@Component({})
export default class SummaryTable extends Vue {
  private controlPanelStore = new ControlPanelStore(this.$store);

  get absStress(): string {
    return this.controlPanelStore.absStress;
  }

  get totalWeight(): string {
    return this.controlPanelStore.totalWeight;
  }
}
</script>

