<template>
  <div>
    <div class="row">
      <div class="col-xs-12">
        <sections-input-row
          v-for="(section,index) in sections"
          :key="index"
          v-bind:section="section"
          v-bind:index="index"
          @on-remove="removeSection"
          @on-type-name-changed="typeNameChanged"
          @on-min-dimension-changed="minDimensionChanged"
          @on-max-dimension-changed="maxDimensionChanged"
          :disabled="disabledRemove"
        ></sections-input-row>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2">
        <button class="btn btn-primary offset" @click="addSection">
          <span class="glyphicon glyphicon-plus"></span>Add
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import SectionsInputRow from "./sections-input-row/sections-input-row.vue";
import SectionsDataStore from "@/store/sections-data/sections-data-store";
import { useStore } from 'vuex';

const props = defineProps<{type: string}>();
const store = new SectionsDataStore(useStore(), props.type);

const sections = computed(() => store.getSections());
const disabledRemove = computed(() => sections.value.length === 1);

const addSection = () => {
  store.addSection();
};

const removeSection = (index: number) => {
  store.removeSection(index);
};

const typeNameChanged = (arg: any) => {
  store.changeTypeName(arg);
};

const maxDimensionChanged = (arg: any) => {
  store.changeMaxDimension(arg);
};

const minDimensionChanged = (arg: any) => {
  store.changeMinDimension(arg);
};
</script>

<style lang="scss" scoped>
button {
  &.offset {
    margin-top: 10px;
  }
}
</style>


