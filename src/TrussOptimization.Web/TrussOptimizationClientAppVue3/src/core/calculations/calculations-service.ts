import CalculationsInput from "./calculations-input";
import CalculationsResult from "./calculations-result";
import SignalRService from "../signalr/signalR-service";
import { runCalculations } from "../http/http";

export default class CalculationsService {
  private singalR: SignalRService;
  constructor(onProgress: (result: CalculationsResult) => void) {
    this.singalR = new SignalRService(onProgress);
  }

  async calculate(input: CalculationsInput): Promise<CalculationsResult> {
    const connectionId = await this.singalR.start();
    const result = await runCalculations(connectionId, input);
    await this.singalR.stop();
    return result;
  }
}
