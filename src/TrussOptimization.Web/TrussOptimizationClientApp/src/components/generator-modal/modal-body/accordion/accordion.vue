<template>
  <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(0)">
        <h4 class="panel-title">Geometry and Load</h4>
      </div>
      <collapse v-model="showAccordion[0]">
        <div class="panel-body">
          <properties-input></properties-input>
        </div>
      </collapse>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(1)">
        <h4 class="panel-title">Top Chord</h4>
      </div>
      <collapse v-model="showAccordion[1]">
        <div class="panel-body">
          <sections-input :type="'Top'"></sections-input>
        </div>
      </collapse>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(2)">
        <h4 class="panel-title">Bracing</h4>
      </div>
      <collapse v-model="showAccordion[2]">
        <div class="panel-body">
          <sections-input :type="'Bracing'"></sections-input>
        </div>
      </collapse>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" role="button" @click="toggleAccordion(3)">
        <h4 class="panel-title">Bottom Chord</h4>
      </div>
      <collapse v-model="showAccordion[3]">
        <div class="panel-body">
          <sections-input :type="'Bottom'"></sections-input>
        </div>
      </collapse>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import PropertiesInput from "./properties-input/properties-input.vue";
import SectionsInput from "./sections-input/sections-input.vue";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
import { AccordionStateUtils } from "@/shared/accordionState";
@Component({
  components: {
    PropertiesInput,
    SectionsInput
  }
})
export default class Accordion extends Vue {
  showAccordion = [true, false, false, false];
  private store = new GeneratorModalStore(this.$store);

  created() {
    this.store.fetchSections();
  }
  mounted() {
    this.showAccordion = this.store.getCurrentTabs();
  }
  toggleAccordion(index) {
    const value = AccordionStateUtils.fromIndex(index);
    this.store.setCurrentTab(value);

    this.showAccordion = this.store.getCurrentTabs();
  }
}
</script>
