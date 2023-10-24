import env from "@/core/env/env";

export const getImageSVG = (img: string) =>
  env.isProduction
    ? `/img/${img}.svg`
    : require(`@/assets/${img}.svg`);
