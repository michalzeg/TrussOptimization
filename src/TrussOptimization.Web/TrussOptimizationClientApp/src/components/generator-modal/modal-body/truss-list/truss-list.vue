<template>
  <ul class="list-group">
    <truss-item
      v-for="image in images"
      :key="image"
      :img="image"
      @set-active="setActive"
      :is-active="isActive(image)"
    ></truss-item>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import TrussItem from "./truss-item/truss-item.vue";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
@Component({
  components: {
    TrussItem
  }
})
export default class TrussList extends Vue {
  private store = new GeneratorModalStore(this.$store);
  setActive(truss: string) {
    this.store.setActiveTruss(truss);
  }

  isActive(truss: string): boolean {
    return this.store.isActiveTruss(truss);
  }

  get images() {
    return this.store.getTrussTypes();
  }
}
</script>
