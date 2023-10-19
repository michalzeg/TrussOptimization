<template>
  <div class="group">
    <div class="detail">
      <p>Top</p>
      <drawing-section :section="topSection"></drawing-section>
      <p>{{topChordName}}</p>
    </div>
    <div class="detail">
      <p>Bracing</p>
      <drawing-section :section="bracingSection"></drawing-section>
      <p>{{bracingName}}</p>
    </div>
    <div class="detail">
      <p>Bottom</p>
      <drawing-section :section="bottomSection"></drawing-section>
      <p>{{bottomChordName}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Drawing3dStore from "@/store/drawing-3d/drawing-3d-store";
import SectionDrawingData from "@/core/drawing/section-drawing-data";
import DrawingSection from "@/components/drawing-2d/drawing-section/drawing-section.vue";
@Component({
  components: {
    DrawingSection
  }
})
export default class SectionDetail extends Vue {
  private drawingStore = new Drawing3dStore(this.$store);

  get topSection(): SectionDrawingData {
    return this.drawingStore.getTopSectionDrawing();
  }

  get bottomSection(): SectionDrawingData {
    return this.drawingStore.getBottomSectionDrawing();
  }
  get bracingSection(): SectionDrawingData {
    return this.drawingStore.getBracingSectionDrawing();
  }

  get topChordName(): string {
    return this.drawingStore.getTopChordName();
  }

  get bottomChordName(): string {
    return this.drawingStore.getBottomChordName();
  }

  get bracingName(): string {
    return this.drawingStore.getBracingName();
  }
}
</script>
<style scoped>
.group {
  display: flex;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #f5f5f5;
  border-bottom-left-radius: 3px;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
}
.group .detail {
  width: 100px;
  padding: 5px;
}
.group .detail:not(:last-child) {
  border-right: 1px solid #ddd;
}
.group .detail p {
  text-align: center;
  margin: 0;
}

</style>
