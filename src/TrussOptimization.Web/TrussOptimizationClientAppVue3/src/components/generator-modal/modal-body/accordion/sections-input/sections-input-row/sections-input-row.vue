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
                @selection-changed="onTypeNameChanged"
              ></select-row>

              <select-row
                :title="'Min'"
                :options="minDimensionNames"
                :value="minDimension"
                @selection-changed="onMinDimensionChanged"
              ></select-row>
              <select-row
                :title="'Max'"
                :options="maxDimensionNames"
                :value="maxDimension"
                @selection-changed="onMaxDimensionChanged"
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

<script setup lang="ts">
import { ref, computed} from 'vue';
import DrawingSection from "@/components/drawing-2d/drawing-section/drawing-section.vue";
import SelectRow from "./select-row/select-row.vue";
import SectionCollection from '@/shared/sections/section-collection';

const props = defineProps<{
  section: SectionCollection,
  index: number,
  disabled: boolean
}>();
const emit = defineEmits(['on-remove', 'on-type-name-changed', 'on-min-dimension-changed', 'on-max-dimension-changed']);

const typeName = computed(() =>(props.section.getTypeName()));
const minDimension = computed(() =>(props.section.getMinDimension()));
const maxDimension = computed(() =>(props.section.getMaxDimension()));

const minDimensionNames = computed(() => props.section.getDimensionNames());
const maxDimensionNames = computed(() => props.section.getMaxDimensionNames());
const minDimensionDrawingData = computed(() => props.section.getMinSectionDrawingData());
const maxDimensionDrawingData = computed(() => props.section.getMaxSectionDrawingData());

const remove = () => {
  emit('on-remove', props.index);
};

const onTypeNameChanged = (name: string) => {
  emit('on-type-name-changed', { index: props.index, typeName: name });
  updateDimensions();
};

const onMinDimensionChanged = (value: string) => {
  emit('on-min-dimension-changed', { index: props.index, minDimension: value });
};

const onMaxDimensionChanged = (value: string) => {
  emit('on-max-dimension-changed', { index: props.index, maxDimension: value });
};

const updateDimensions = () => {
  typeName.value; // Just force an update by accessing the reactive variable
};

const typeNames = computed(() => {
  const result = props.section.getTypeNames();
  updateDimensions();
  return result;
});
</script>


<style lang="scss" scoped>
div {
  &.title {
    text-align: center;
    font-style: italic;
    font-weight: bold;
  }
}
</style>


