import ElementLine from "@/shared/element-line";
import ElementPoint from "@/shared/element-point";
import { AccordionState } from "@/shared/accordionState";

export function getSortingStrategy(accordionState: AccordionState): Sorting {
  switch (accordionState) {
    case AccordionState.bottom:
      return new BottomSorting();
    case AccordionState.top:
      return new TopSorting();
    case AccordionState.bracing:
      return new BracingSorting();
    default:
      return new DefaultSorting();
  }
}

export interface Sorting {
  sortElements(
    top: ElementLine[],
    bottom: ElementLine[],
    bracing: ElementLine[]
  ): ElementLine[];
  sortNodes(
    top: ElementPoint[],
    bottom: ElementPoint[],
    bracing: ElementPoint[]
  ): ElementPoint[];
}

export class TopSorting implements Sorting {
  sortElements(
    top: ElementLine[],
    bottom: ElementLine[],
    bracing: ElementLine[]
  ): ElementLine[] {
    return [...bottom, ...bracing, ...top];
  }
  sortNodes(
    top: ElementPoint[],
    bottom: ElementPoint[],
    bracing: ElementPoint[]
  ): ElementPoint[] {
    return [...bottom, ...bracing, ...top];
  }
}

// tslint:disable-next-line:max-classes-per-file
export class BottomSorting implements Sorting {
  sortElements(
    top: ElementLine[],
    bottom: ElementLine[],
    bracing: ElementLine[]
  ): ElementLine[] {
    return [...bracing, ...top, ...bottom];
  }
  sortNodes(
    top: ElementPoint[],
    bottom: ElementPoint[],
    bracing: ElementPoint[]
  ): ElementPoint[] {
    return [...bracing, ...top, ...bottom];
  }
}

// tslint:disable-next-line:max-classes-per-file
export class BracingSorting implements Sorting {
  sortElements(
    top: ElementLine[],
    bottom: ElementLine[],
    bracing: ElementLine[]
  ): ElementLine[] {
    return [...top, ...bottom, ...bracing];
  }
  sortNodes(
    top: ElementPoint[],
    bottom: ElementPoint[],
    bracing: ElementPoint[]
  ): ElementPoint[] {
    return [...top, ...bottom, ...bracing];
  }
}
// tslint:disable-next-line:max-classes-per-file
export class DefaultSorting implements Sorting {
  sortElements(
    top: ElementLine[],
    bottom: ElementLine[],
    bracing: ElementLine[]
  ): ElementLine[] {
    return [...top, ...bottom, ...bracing];
  }
  sortNodes(
    top: ElementPoint[],
    bottom: ElementPoint[],
    bracing: ElementPoint[]
  ): ElementPoint[] {
    return [...top, ...bottom, ...bracing];
  }
}
