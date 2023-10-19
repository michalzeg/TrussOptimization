<template>
  <li class="list-group-item" @click="setActive()" v-bind:class="{'current': isActive}">
    <a href="#">
      <img :src="imgPath">
    </a>
  </li>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { getImageSVG } from "@/shared/images";
@Component
export default class TrussItem extends Vue {
  @Prop() img!: string;
  @Prop() isActive!: boolean;
  @Emit()
  setActive(): string {
    return this.img;
  }

  get imgPath() {
    return getImageSVG(this.img);
  }
}
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
li.current {
  background-color: #eee;
}
li:hover {
  background-color: #eee;
}
</style>


