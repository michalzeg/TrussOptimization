import env from "@/core/env/env";

export default function log(value: any) {
  if (!env.isProduction) {
    // tslint:disable-next-line:no-console
    console.log(value);
  }
}
