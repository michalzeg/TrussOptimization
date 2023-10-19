import { CalculationsState } from "@/core/calculations/calculations-state";

export default function getStatusMessage(state: CalculationsState) {
  let result = "";
  switch (state) {
    case CalculationsState.dirty:
      result = dirtyMsg;
      break;
    case CalculationsState.error:
      result = errorMsg;
      break;
    case CalculationsState.progress:
      result = processingMsg;
      break;
    case CalculationsState.valid:
      result = validMsg;
      break;
    case CalculationsState.loading:
      result = loadingMsg;
      break;
    default:
      break;
  }
  return result;
}
const dirtyMsg = "Results are NOT up to date.";
const errorMsg = "An error has occured. Please try again.";
const validMsg = "Results are up to date";
const processingMsg = "Processing... Calculations are being performed.";
const loadingMsg = "Loading...";
