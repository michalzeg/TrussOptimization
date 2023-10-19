import { Point } from "@/core/truss/point";
import { VueDrawingHelperBase } from "../vue-drawing-helper-base";
import DrawingOptions from "../drawing-options";
import SectionDrawingData from "@/core/drawing/section-drawing-data";


export class SectionDrawingHelper extends VueDrawingHelperBase {

    constructor(private section: SectionDrawingData) {
        super(DrawingOptions.SectionDrawingOptions)
    }

    protected getDrawingHeight(): number {
        return this.section.height;
    }
    protected getDrawingWidth(): number {
        return this.section.width;
    }
    protected getDrawingCentre(): Point {
        return this.section.center;
    }

    public changeSection(section: SectionDrawingData){
        this.section = section;
    }

}