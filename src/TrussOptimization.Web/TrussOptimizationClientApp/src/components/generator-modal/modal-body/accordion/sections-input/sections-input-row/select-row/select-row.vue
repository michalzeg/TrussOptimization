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
<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class SelectRow extends Vue {
  @Prop() options!: string[];
  @Prop() value!: string;
  @Prop() title!: string;
  @Emit()
  selectionChanged(value: string) {
    return value;
  }

  @Watch("value")
  onValueChanged(val: string, oldVal: string) {
    this.value = val;
  }

  changed({ target: { value } }) {
    this.selectionChanged(value);
  }
}
</script>
<style scoped>
</style>