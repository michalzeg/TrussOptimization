import { Point } from "@/core/truss/point";
import { VueDrawingHelperBase } from "../vue-drawing-helper-base";
import DrawingOptions from "../drawing-options";
import GeneratorModalStore from "@/store/generator-modal/generator-modal-store";


export class TrussDrawingHelper extends VueDrawingHelperBase {

    constructor(private readonly store: GeneratorModalStore) {
        super(DrawingOptions.TrussDrawingOptions)
    }

    protected getDrawingHeight(): number {
        const drawingData = this.store.getTrussDrawingData();
        return drawingData.height;
    }
    protected getDrawingWidth(): number {
        const drawingData = this.store.getTrussDrawingData();
        return drawingData.width;
    }
    protected getDrawingCentre(): Point {
        const drawingData = this.store.getTrussDrawingData();
        return drawingData.centre;
    }

}