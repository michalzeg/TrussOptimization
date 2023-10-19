<template>
  <div id="progress" class="progress-circle"></div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import startProgress from "./progress";
@Component
export default class ProgressBar extends Vue {
  mounted() {
    startProgress();
  }
}
</script>
<style scoped>
.progress-circle {
  height: 100%;
  position: relative;
  background-color: transparent;
  border-color: white;
  border-width: thin;
  margin-bottom: 20px;
}

.progress-circle > svg {
  height: 100%;
  display: block;
}
.progress {
  margin-top: 2%;
  margin-bottom: 0px !important;
}
</style>

