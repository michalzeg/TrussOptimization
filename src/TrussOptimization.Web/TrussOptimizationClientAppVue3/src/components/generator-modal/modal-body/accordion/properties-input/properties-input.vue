<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="length" class="col-sm-2 control-label">Length:</label>
        <div class="col-sm-3">
          <input
            :value="length"
            @input="lengthChanged($event.target as HTMLInputElement)"
            type="number"
            class="form-control"
            id="length"
            step="10"
            min="1"
            v-bind:class="{'invalid':lengthInvalid}"
          >
        </div>
        <label class="col-sm-1 control-label">[mm]</label>
      </div>
      <div class="form-group">
        <label for="width" class="col-sm-2 control-label">Height:</label>
        <div class="col-sm-3">
          <input
            :value="height"
            @input="heightChanged($event.target as HTMLInputElement)"
            type="number"
            class="form-control"
            id="width"
            step="10"
            min="1"
            :class="{'invalid':heightInvalid}"
          >
        </div>
        <label class="col-sm-1 control-label">[mm]</label>
      </div>
      <div class="form-group">
        <label for="load" class="col-sm-2 control-label">Load:</label>
        <div class="col-sm-3">
          <input
            :value="load"
            @input="loadChanged($event.target as HTMLInputElement)"
            type="number"
            class="form-control"
            id="load"
            step="10"
            min="1"
            :class="{'invalid':loadInvalid}"
          >
        </div>
        <label class="col-sm-1 control-label">[N]</label>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import GeneratorModalStore from '@/store/generator-modal/generator-modal-store';
import { ref, watch } from 'vue';
import { useStore } from 'vuex';

const length = ref(0);
const height = ref(0);
const load = ref(0);

const lengthInvalid = ref(false);
const heightInvalid = ref(false);
const loadInvalid = ref(false);

const store = new GeneratorModalStore(useStore());

const isInvalidNumber = (value: string): boolean => {
  const result = !Number.isInteger(+value) || +value <= 0;
  store.setValid(!result);
  return result;
};

const lengthChanged = (target: HTMLInputElement): void => {
  lengthInvalid.value = isInvalidNumber(target.value);
  if (!lengthInvalid.value) {
    store.setLength(+target.value);
  }
};

const heightChanged = (target: HTMLInputElement): void => {
  heightInvalid.value = isInvalidNumber(target.value);
  if (!heightInvalid.value) {
    store.setHeight(+target.value);
  }
};

const loadChanged = (target: HTMLInputElement): void => {
  loadInvalid.value = isInvalidNumber(target.value);
  if (!loadInvalid.value) {
    store.setLoad(+target.value);
  }
};

watch([length, height, load], () => {
  const invalidLength = isInvalidNumber(length.value.toString());
  const invalidHeight = isInvalidNumber(height.value.toString());
  const invalidLoad = isInvalidNumber(load.value.toString());

  lengthInvalid.value = invalidLength;
  heightInvalid.value = invalidHeight;
  loadInvalid.value = invalidLoad;
});

length.value = store.getLength();
height.value = store.getHeight();
load.value = store.getLoad();
</script>


<style lang="scss" scoped>
</style>