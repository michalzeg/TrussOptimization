import { createLogger, createStore } from 'vuex'
import { generatorModalModule } from "./generator-modal";
import { controlPanelModule } from "./control-panel";
import { sectionsDataModule } from "./sections-data";
import { drawing3dModule } from "./drawing-3d";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    generatorModalModule,
    controlPanelModule,
    sectionsDataModule,
    drawing3dModule
  }})
