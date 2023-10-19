import Vue from "vue";
import Vuex, {
  } from "vuex";
import { generatorModalModule } from "./generator-modal";
import { controlPanelModule } from "./control-panel";
import { sectionsDataModule } from "./sections-data";
import { drawing3dModule } from "./drawing-3d";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  modules: {
    generatorModalModule,
    controlPanelModule,
    sectionsDataModule,
    drawing3dModule
  }
});
