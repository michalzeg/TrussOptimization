<template>
  <div id="progress" class="progress-circle"></div>
</template>
<script setup lang="ts">
import * as progress  from "./progress.js";
import { onMounted } from 'vue';

onMounted(() => {
  progress.startProgress();
});

</script>
<style lang="scss" scoped>
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

