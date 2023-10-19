import ElementResult from "./element-result";

export default interface CalculationsResult {
  topChordResult: ElementResult;
  bottomChordResult: ElementResult;
  bracingResult: ElementResult;
  absStress: number;
  totalWeight: number;
  minStress: number;
  maxStress: number;
}
