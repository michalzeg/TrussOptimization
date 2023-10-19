import TrussType1 from "@/core/truss-types/truss-type-1";
import TrussType2 from "@/core/truss-types/truss-type-2";
import TrussType from "@/core/truss-types/truss-type";
import { AccordionState } from "@/shared/accordionState";
import TrussType3 from "@/core/truss-types/truss-type-3";
import TrussType4 from "@/core/truss-types/truss-type-4";
import TrussType5 from "@/core/truss-types/truss-type-5";

export class GeneratorModalState {
  trussTypes = [
    new TrussType1(),
    new TrussType2(),
    new TrussType3(),
    new TrussType4(),
    new TrussType5()
  ];
  activeTruss = <TrussType>this.trussTypes[0];
  length: number = 20000;
  height: number = 2000;
  load: number = 100000;
  isValid: boolean = true;
  currentTab: AccordionState = AccordionState.properties;

  activeTrussFinal = this.activeTruss;
  lengthFinal = this.length;
  heightFinal = this.height;
  loadFinal = this.load;
}
