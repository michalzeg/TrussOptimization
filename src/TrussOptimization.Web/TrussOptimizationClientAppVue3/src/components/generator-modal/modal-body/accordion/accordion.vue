<template>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(0)">
        <h4 class="panel-title">Geometry and Load</h4>
      </div>
      <div class="panel-collapse collapse" :class="showAccordion[0] ? 'in' : ''">
        <div class="panel-body">
          <properties-input></properties-input>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(1)">
        <h4 class="panel-title">Top Chord</h4>
      </div>
      <div class="panel-collapse collapse" :class="showAccordion[1] ? 'in' : ''">
        <div class="panel-body">
          <sections-input :type="'Top'"></sections-input>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(2)">
        <h4 class="panel-title">Bracing</h4>
      </div>
      <div class="panel-collapse collapse" :class="showAccordion[2] ? 'in' : ''">
        <div class="panel-body">
          <sections-input :type="'Bracing'"></sections-input>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(3)">
        <h4 class="panel-title">Bottom Chord</h4>
      </div>
      <div class="panel-collapse collapse" :class="showAccordion[3] ? 'in' : ''">
        <div class="panel-body">
          <sections-input :type="'Bottom'"></sections-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

import PropertiesInput from "./properties-input/properties-input.vue";
import SectionsInput from "./sections-input/sections-input.vue";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
import { AccordionStateUtils } from "@/shared/accordionState";
import { useStore } from 'vuex';

const showAccordion = ref([true, false, false, false]);
const store = new GeneratorModalStore(useStore());

onMounted(() => {
  store.fetchSections();
  showAccordion.value = store.getCurrentTabs();
});

const toggleAccordion = (index: number) => {
  const value = AccordionStateUtils.fromIndex(index);
  store.setCurrentTab(value);
  showAccordion.value = store.getCurrentTabs();
};
</script>
<style>

</style>
