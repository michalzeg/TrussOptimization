import log from "@/shared/utils/log";
import CalculationsResult from "../calculations/calculations-result";
import env from "../env/env";

import * as signalR from "@aspnet/signalr";

const hubName = "TrussOptimizationHub";
const url = env.isProduction
  ? window.location.href
  : "http://localhost:5000/";

export default class SignalRService {
  private connection: signalR.HubConnection;

  constructor(onProgress: (result: CalculationsResult) => void) {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${url}${hubName}`)
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.connection.on("progress", result => {
      log(result);
      onProgress(JSON.parse(result) as CalculationsResult);
    });
  }

  async start(): Promise<string> {
    await this.connection.start().catch(err => {
      log(err.toString());
    });
    const id = await this.connection.invoke("getId");
    return id;
  }
  async stop(): Promise<any> {
    await this.connection.stop();
  }
}