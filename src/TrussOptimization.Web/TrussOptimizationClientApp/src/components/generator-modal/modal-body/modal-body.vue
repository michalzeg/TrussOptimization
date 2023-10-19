<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-4">
        <truss-list></truss-list>
      </div>
      <div class="col-xs-8">
        <div class="row">
          <div class="col-xs-12">
            <truss-image></truss-image>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <accordion></accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TrussList from "./truss-list/truss-list.vue";
import TrussImage from "./truss-image/truss-image.vue";
import Accordion from "./accordion/accordion.vue";
@Component({
  components: {
    TrussList,
    TrussImage,
    Accordion
  }
})
export default class ModalBody extends Vue {}
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
</style>

