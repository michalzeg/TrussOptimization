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

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import SectionsDataStore from "@/store/sections-data/sections-data-store";
import SectionsInputRow from "./sections-input-row/sections-input-row.vue";
import SectionCollection from "@/shared/sections/section-collection";
@Component({ components: { SectionsInputRow } })
export default class SectionsInput extends Vue {
  @Prop() type!: string;
  private store!: SectionsDataStore;
  created() {
    this.store = new SectionsDataStore(this.$store, this.type);
  }

  get sections(): SectionCollection[] {
    return this.store.getSections();
  }

  get disabledRemove(): boolean {
    return this.sections.length === 1;
  }

  addSection() {
    this.store.addSection();
  }

  removeSection(index: number) {
    this.store.removeSection(index);
  }

  typeNameChanged(arg) {
    this.store.changeTypeName(arg);
  }
  maxDimensionChanged(arg) {
    this.store.changeMaxDimension(arg);
  }
  minDimensionChanged(arg) {
    this.store.changeMinDimension(arg);
  }
}
</script>
<style scoped>
button.offset {
  margin-top: 10px;
}

</style>


