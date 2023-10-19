<template>
  <div style="height: 200px;">
    <line-chart :data="chart" :height="200"></line-chart>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import LineChart from "./line-chart/line-chart.vue";
import ControlPanelStore from "@/store/control-panel/control-panel-store";

const controlPanelStore = new ControlPanelStore(useStore());

  const chart =  {
    labels: controlPanelStore.labels,

    datasets: [
      {
        label: "Total Weight [kg]",
        fill: false,
        steppedLine: false,
        yAxidID: "weight",
        backgroundColor: "#337ab7",
        data: controlPanelStore.totalWeightProgress
      },
      {
        label: "Max Stress [MPa]",
        fill: false,
        steppedLine: false,
        yAxisID: "stress",
        backgroundColor: "#4cae4c",
        data: controlPanelStore.maxStressProgress
      }
    ]
  };
</script>

