import TrussType1 from "@/core/truss-types/truss-type-1";
import { TrussStructure } from "@/core/truss/truss-structure";
import TrussSections from "@/shared/sections/truss-sections";

export class Drawing3dState {
  trussStructure: TrussStructure = new TrussType1().getTrussStructure(
    20000,
    2000,
    10000
  );
  trussSections: TrussSections = TrussSections.Empty;
}
