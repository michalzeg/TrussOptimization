import axios from "axios";
import env from "@/core/env/env";
import CalculationsInput from "@/core/calculations/calculations-input";
import CalculationsResult from "../calculations/calculations-result";
import log from "@/shared/utils/log";

export function runCalculations(
  connectionId: string,
  input: CalculationsInput
): Promise<CalculationsResult> {
  return axios
    .post(`${env.url}Calculations/${connectionId}`, input)
    .then(res => {
      log(res);
      return res.data as CalculationsResult;
    });
}

export function getSections(): Promise<any> {
  return axios.get(`${env.url}Sections`);
}
