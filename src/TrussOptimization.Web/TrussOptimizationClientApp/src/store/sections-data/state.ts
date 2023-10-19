import Section from "@/shared/sections/section";
import SectionCollection from "@/shared/sections/section-collection";

export class SectionsDataState {
  section: SectionCollection = new SectionCollection([Section.Empty]);
  topSections: SectionCollection[] = [this.section.clone()];
  bottomSections: SectionCollection[] = [this.section.clone()];
  bracingSections: SectionCollection[] = [this.section.clone()];

  topSectionsFinal: SectionCollection[] = this.topSections;
  bottomSectionsFinal: SectionCollection[] = this.bottomSections;
  bracingSectionsFinal: SectionCollection[] = this.bracingSections;
}
