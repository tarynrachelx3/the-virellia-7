export type CrownLineageKey =
  | "luminari"
  | "aetherion"
  | "pyroclast"
  | "verdant-weave";

export type HybridClassKey =
  | "native-crown-hybrid"
  | "cross-world-crown-hybrid";

export interface CrownLineage {
  key: CrownLineageKey;
  designation: string;
  name: string;
  region: string;
  energyType: string;
  summary: string;
  traits: string[];
  roles: string[];
  archiveNotes: string;
  knownFigures: {
    name: string;
    href: string;
  }[];
  accentClass: string;
  visual?: string;
}

export interface HybridClass {
  key: HybridClassKey;
  designation: string;
  name: string;
  summary: string;
  traits: string[];
  classificationNote: string;
  knownExample: {
    name: string;
    href: string;
  };
  accentClass: string;
}

export interface CrownProfile {
  name: string;
  designation: string;
  classification: string;
  description: string;
  href: string;
  image?: string;
  accentClass: string;
}