import env from "@/core/env/env";

export const getImageSVG = (img: string) =>
  env.isProduction
    ? `/TrussOptimizationClientApp/dist/img/${img}.svg`
    : require(`@/assets/${img}.svg`);
