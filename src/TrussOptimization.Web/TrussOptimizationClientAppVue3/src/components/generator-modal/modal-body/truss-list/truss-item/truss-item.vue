<template>
  <li class="list-group-item" @click="handleClick()" v-bind:class="{'current': isActive}">
    <a href="#">
      <img :src="imgPath">
    </a>
  </li>
</template>
<script setup lang="ts">
import { getImageSVG } from "@/shared/images";

const props = defineProps(['img', 'isActive']);
const emits = defineEmits(['setActive']);

const handleClick = () => {
  emits('setActive', props.img);
};

const imgPath = getImageSVG(props.img);
</script>
<style lang="scss" scoped>
$background-color: #eee;
img {
  width: 100%;
  height: 100%;
}
li {
  &.current {
    background-color: $background-color;
  }
  &:hover {
    background-color: $background-color;
  }
}
</style>


