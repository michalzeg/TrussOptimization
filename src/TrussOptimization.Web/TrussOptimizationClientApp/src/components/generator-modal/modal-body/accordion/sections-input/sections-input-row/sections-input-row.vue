<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-6">
          <div class="row">
            <div class="col-xs-12">
              <select-row
                :title="'Section'"
                :options="typeNames"
                :value="typeName"
                @selection-changed="typeNameChanged"
              ></select-row>

              <select-row
                :title="'Min'"
                :options="minDimensionNames"
                :value="minDimension"
                @selection-changed="minDimensionChanged"
              ></select-row>
              <select-row
                :title="'Max'"
                :options="maxDimensionNames"
                :value="maxDimension"
                @selection-changed="maxDimensionChanged"
              ></select-row>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="row">
            <div class="col-xs-6">
              <drawing-section :section="minDimensionDrawingData"></drawing-section>
            </div>
            <div class="col-xs-6">
              <drawing-section :section="maxDimensionDrawingData"></drawing-section>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-6 title">Min</div>
            <div class="col-xs-6 title">Max</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-1 col-xs-offset-9">
          <button type="button" class="btn btn-danger" @click="remove" :disabled="disabled">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span> Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import SectionCollection from "@/shared/sections/section-collection";
import DrawingSection from "@/components/drawing-2d/drawing-section/drawing-section.vue";
import SectionDrawingData from "@/core/drawing/section-drawing-data";
import SelectRow from "./select-row/select-row.vue";
@Component({
  components: {
    DrawingSection,
    SelectRow
  }
})
export default class SectionsInputRow extends Vue {
  @Prop() section!: SectionCollection;
  @Prop() index!: number;
  @Prop() disabled!: boolean;
  get minDimensionNames(): string[] {
    return this.section.getDimensionNames();
  }
  get maxDimensionNames(): string[] {
    return this.section.getMaxDimensionNames();
  }
  get typeName(): string {
    return this.section.getTypeName();
  }
  get minDimension(): string {
    return this.section.getMinDimension();
  }
  get maxDimension(): string {
    return this.section.getMaxDimension();
  }

  typeNameChanged(value: string) {
    this.onTypeNameChanged(value);
    this.updateDimensions();
  }

  minDimensionChanged(value: string) {
    this.onMinDimensionChanged(value);
  }

  maxDimensionChanged(value: string) {
    this.onMaxDimensionChanged(value);
  }

  get minDimensionDrawingData(): SectionDrawingData {
    return this.section.getMinSectionDrawingData();
  }

  get maxDimensionDrawingData(): SectionDrawingData {
    return this.section.getMaxSectionDrawingData();
  }

  get typeNames(): string[] {
    const result = this.section.getTypeNames();

    this.updateDimensions();
    return result;
  }

  mounted() {
    this.updateDimensions();
  }
  updateDimensions() {
    this.$forceUpdate();
  }

  @Emit()
  onRemove(): number {
    return this.index;
  }
  remove() {
    this.onRemove();
  }
  @Emit()
  onTypeNameChanged(name: string) {
    return { index: this.index, typeName: name };
  }

  @Emit()
  onMaxDimensionChanged(value: string) {
    return { index: this.index, maxDimension: value };
  }
  @Emit()
  onMinDimensionChanged(value: string) {
    return { index: this.index, minDimension: value };
  }
}
</script>
<style scoped>
div.title {
  text-align: center;
  font-style: italic;
  font-weight: bold;
}

</style>


