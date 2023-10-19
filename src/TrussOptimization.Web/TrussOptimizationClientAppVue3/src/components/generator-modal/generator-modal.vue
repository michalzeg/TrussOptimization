<template>
  <div class="modal fade in" :class="isOpen ? 'enabled' : ''" v-if="isOpen">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <span>
          <i class="glyphicon glyphicon-cog"></i> Truss Generator
        </span>
      </div>
      <div class="modal-body">
        <modal-body></modal-body>
      </div>
      <div class="modal-footer">
        <button type="button" @click="cancelModal()" class="btn btn-default">Close</button>
        <button type="button" @click="okModal" :disabled="isModalValid" class="btn btn-primary">Save changes</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import ModalBody from "./modal-body/modal-body.vue";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
import { useStore } from 'vuex';

const store = useStore();
const controlPanelStore = new ControlPanelStore(store);
const generatorModalStore = new GeneratorModalStore(store);

const isOpen =  computed(() => controlPanelStore.isGeneratorModalOpen());

const cancelModal = () => {
  controlPanelStore.toggleGeneratorModal();
  controlPanelStore.cancelChanges();
};

const okModal = () => {
  controlPanelStore.toggleGeneratorModal();
  controlPanelStore.saveChanges();
  controlPanelStore.setDirtyState();
  controlPanelStore.clearResults();
};

const isModalValid = computed(() => {
  return !generatorModalStore.getIsValid();
});
</script>
<style scoped>
.enabled {
  display: block !important;
  background-color: rgba(0,0,0,0.4) !important;
}
</style>



