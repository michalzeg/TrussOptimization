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

<script setup lang="ts">
import { useStore } from "vuex";
import TrussItem from "./truss-item/truss-item.vue";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";

const store = new GeneratorModalStore(useStore());

const setActive = (truss: string) => {
  store.setActiveTruss(truss);
};

const isActive = (truss: string): boolean => {
  return store.isActiveTruss(truss);
};

const images = store.getTrussTypes();
</script>
