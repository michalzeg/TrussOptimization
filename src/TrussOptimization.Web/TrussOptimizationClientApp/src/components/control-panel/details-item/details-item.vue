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
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TotalWeightChart from "./total-weight-chart/total-weight-chart.vue";
import SummaryTable from "./summary-table/summary-table.vue";
@Component({
  components: {
    TotalWeightChart,
    SummaryTable
  }
})
export default class DetailsItem extends Vue {}
</script>
<style scoped>
</style>

