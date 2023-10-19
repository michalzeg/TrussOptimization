<template>
  <div class="row row-eq-height">
    <div class="col-xs-4">
      <summary-table></summary-table>
    </div>
    <div class="col-xs-8">
      <total-weight-chart></total-weight-chart>
    </div>
  </div>
</template>
<script setup lang="ts">
import TotalWeightChart from "./total-weight-chart/total-weight-chart.vue";
import SummaryTable from "./summary-table/summary-table.vue";
</script>
<style lang="scss" scoped>
</style>

