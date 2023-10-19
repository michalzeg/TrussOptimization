<template>
  <section>
    <modal :value="isOpen" title="Modal Title" size="lg" :dismiss-btn="false">
      <span slot="title">
        <i class="glyphicon glyphicon-cog"></i> Truss Generator
      </span>
      <modal-body></modal-body>
      <div slot="footer">
        <btn @click="cancelModal()">Cancel</btn>
        <btn type="primary" @click="okModal" :disabled="isModalValid">OK</btn>
      </div>
    </modal>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ControlPanelStore from "@/store/control-panel/control-panel-store";
import ModalBody from "./modal-body/modal-body.vue";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";
@Component({
  components: {
    ModalBody
  }
})
export default class GeneratorModal extends Vue {
  private controlPanelStore = new ControlPanelStore(this.$store);
  private generatorModalStore = new GeneratorModalStore(this.$store);
  get isOpen() {
    return this.controlPanelStore.isGeneratorModalOpen();
  }
  cancelModal() {
    this.controlPanelStore.toggleGeneratorModal();
    this.controlPanelStore.cancelChanges();
  }

  okModal() {
    this.controlPanelStore.toggleGeneratorModal();
    this.controlPanelStore.saveChanges();
    this.controlPanelStore.setDirtyState();
    this.controlPanelStore.clearResults();
  }

  get isModalValid() {
    return !this.generatorModalStore.getIsValid();
  }
}
</script>
<style scoped>
</style>



