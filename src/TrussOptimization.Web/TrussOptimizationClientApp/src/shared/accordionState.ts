export enum AccordionState {
  properties,
  top,
  bracing,
  bottom
}

export class AccordionStateUtils {
  static get accordionStateArray(): AccordionState[] {
    return [
      AccordionState.properties,
      AccordionState.top,
      AccordionState.bracing,
      AccordionState.bottom
    ];
  }
  static fromIndex(index: number): AccordionState {
    return AccordionStateUtils.accordionStateArray[index] as AccordionState;
  }

  static getName(state: AccordionState): string {
    switch (state) {
      case AccordionState.top:
        return "top";
      case AccordionState.bracing:
        return "bracing";
      case AccordionState.bottom:
        return "bottom";
      case AccordionState.properties:
        return "properties";
      default:
        return "";
    }
  }
}
