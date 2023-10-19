<template>
  <table class="table">
    <thead>
      <tr>
        <th class="text-left">Summary</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Weight</td>
        <td>
          <i>{{totalWeight}}</i>
        </td>
        <td>
          <i>[kg]</i>
        </td>
      </tr>
      <tr>
        <td>Max Stress</td>
        <td>
          <i>{{absStress}}</i>
        </td>
        <td>
          <i>[MPa]</i>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import { useStore } from "vuex";
import {computed} from 'vue';

const controlPanelStore = new ControlPanelStore(useStore());

const absStress = computed(()=> controlPanelStore.absStress);
const totalWeight = computed(()=> controlPanelStore.totalWeight);
</script>

