import { Point } from "@/core/truss/point";

export default interface SectionType {
  name: string;
  typeName: string;
  dimension: string;
  area: number;
  coordinates: Point[];
}
