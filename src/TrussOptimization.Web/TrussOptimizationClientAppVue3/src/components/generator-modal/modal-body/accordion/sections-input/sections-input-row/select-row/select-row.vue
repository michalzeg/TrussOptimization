<template>
  <div class="row">
    <div class="col-xs-12">
      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-xs-4 control-label" v-bind:for="title">{{title}}:</label>
          <div class="col-xs-8">
            <select class="form-control" :value="value" v-on:change="changed" v-bind:id="title">
              <option
                v-for="option in options"
                :key="option"
                v-bind:selected="option === value"
              >{{option}}</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  options: string[],
  title: string,
  value: string,
}>();
const selectedValue = ref(props.value);

const emit = defineEmits(['selection-changed']);

watch(selectedValue, (newValue) => {
  emit('selection-changed', newValue);
});

const changed = (event: Event) => {
  selectedValue.value = (event.target as HTMLInputElement).value;
};
</script>
<style scoped>
</style>