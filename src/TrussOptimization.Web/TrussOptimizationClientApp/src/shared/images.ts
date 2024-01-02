import env from "@/core/env/env";

export const getImageSVG = (img: string) =>
  env
    ? `/img/${img}.svg`
    : require(`@/assets/${img}.svg`);
