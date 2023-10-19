import CalculationsResult from "@/core/calculations/calculations-result";
import { CalculationsState } from "@/core/calculations/calculations-state";

export class ControlPanelState {
  isGeneratorOpened = false;
  calculationsProgress: CalculationsResult[] = [];
  calculationsState: CalculationsState = CalculationsState.dirty;
}
