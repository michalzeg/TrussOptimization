<template>
  <div>
    <form class="form-horizontal">
      <div class="form-group">
        <label for="length" class="col-sm-2 control-label">Length:</label>
        <div class="col-sm-3">
          <input
            :value="length"
            @input="lengthChanged"
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
            @input="heightChanged"
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
            @input="loadChanged"
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

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
@Component
export default class PropertiesInput extends Vue {
  lengthInvalid = false;
  heightInvalid = false;
  loadInvalid = false;
  private store = new GeneratorModalStore(this.$store);

  isInvalidNumber(value: string): boolean {
    const result = !Number.isInteger(+value) || +value <= 0;
    this.store.setValid(!result);
    return result;
  }

  get length() {
    return this.store.getLength();
  }

  lengthChanged({ target: { value } }): void {
    this.lengthInvalid = this.isInvalidNumber(value);
    if (!this.lengthInvalid) {
      this.store.setLength(+value);
    }
  }

  get height() {
    return this.store.getHeight();
  }

  heightChanged({ target: { value } }): void {
    this.heightInvalid = this.isInvalidNumber(value);
    if (!this.heightInvalid) {
      this.store.setHeight(+value);
    }
  }

  get load() {
    return this.store.getLoad();
  }

  loadChanged({ target: { value } }): void {
    this.loadInvalid = this.isInvalidNumber(value);
    if (!this.loadInvalid) {
      this.store.setLoad(+value);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>