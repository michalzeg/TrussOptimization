import { TrussStructure } from "../truss/truss-structure";
import SectionBoundary from "@/shared/sections/section-boundary";
import Material from "../material/material";

export default interface CalculationsInput {
  trussMaterial: Material;
  trussStructure: TrussStructure;

  topChordSections: SectionBoundary[];
  bottomChordSections: SectionBoundary[];
  bracingChordSections: SectionBoundary[];
}
