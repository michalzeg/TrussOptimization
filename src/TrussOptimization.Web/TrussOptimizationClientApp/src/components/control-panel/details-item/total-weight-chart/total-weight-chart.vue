<template>
  <div>
    <line-chart :chart-data="chart" :height="200"></line-chart>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import LineChart from "./line-chart/line-chart.vue";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
@Component({
  components: {
    LineChart
  }
})
export default class TotalWeightChart extends Vue {
  private controlPanelStore = new ControlPanelStore(this.$store);

  get chart() {
    return {
      labels: this.controlPanelStore.labels,

      datasets: [
        {
          label: "Total Weight [kg]",
          fill: false,
          steppedLine: false,
          yAxidID: "weight",
          backgroundColor: "#337ab7",
          data: this.controlPanelStore.totalWeightProgress
        },
        {
          label: "Max Stress [MPa]",
          fill: false,
          steppedLine: false,
          yAxisID: "stress",
          backgroundColor: "#4cae4c",
          data: this.controlPanelStore.maxStressProgress
        }
      ]
    };
  }
}
</script>

