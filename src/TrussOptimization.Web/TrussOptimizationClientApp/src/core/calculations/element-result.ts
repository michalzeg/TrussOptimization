import StressResult from "./stress-result";

export default class ElementResult {
  weight!: number;
  stress!: number;
  sectionName!: string;
  elementResults!: StressResult[];
}
