<template>
  <div class="panel panel-default">
    <drawing-truss></drawing-truss>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DrawingTruss from "../../../drawing-2d/drawing-truss/drawing-truss.vue";
@Component({
  components: {
    DrawingTruss
  }
})
export default class TrussImage extends Vue {}
</script>
<style scoped>
div.panel.panel-default {
  padding: 10px;
}

</style>

