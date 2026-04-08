import type { CrownLineage, HybridClass, CrownProfile } from "@/types/crownclassification";

export const crownLineages: CrownLineage[] = [
  {
    key: "luminari",
    designation: "L-01",
    name: "Luminari",
    region: "Luminara Vale",
    energyType: "Resonant Light",
    summary:
      "The most stable Crown lineage, shaped by auroral exposure and luminous atmospheric fields.",
    traits: [
      "Emerald or jewel-toned skin",
      "Pearl-tipped bioluminescent antennae",
      "Photoreactive eyes",
      "High emotional and sensory acuity",
    ],
    roles: ["Royal bloodlines", "Diplomacy", "Cultural influence"],
    archiveNotes:
      "Highest compatibility with Aurelios radiation. Most frequently associated with Crown succession.",
    knownFigures: [{ name: "Nova Vox", href: "/nova" }],
    accentClass: "luminari",
  },
  {
    key: "aetherion",
    designation: "A-02",
    name: "Aetherion",
    region: "Ionized Plateaus",
    energyType: "Electromagnetic Conduction",
    summary:
      "A magnetosphere-adapted lineage with conductive biology, angular beauty, and systems-level precision.",
    traits: [
      "Metallic or iridescent skin",
      "Signal-receptive antennae",
      "Glowing or low-contrast pupils",
      "Subdermal conductivity",
    ],
    roles: ["Engineers", "Signal specialists", "Infrastructure architects"],
    archiveNotes:
      "Highly efficient neural conduction. Strong interaction with planetary field systems.",
    knownFigures: [{ name: "Blistertone", href: "/orbit-and-the-outliers" }],
    accentClass: "aetherion",
  },
  {
    key: "pyroclast",
    designation: "P-03",
    name: "Pyroclast",
    region: "Thermal Fault Zones",
    energyType: "Thermal Flux",
    summary:
      "A heat-adapted lineage marked by volatile beauty, intense expression, and high resilience.",
    traits: [
      "Lava-veined skin patterning",
      "Flame-reactive antennae",
      "Elevated internal heat output",
      "Ember-like glow fissures",
    ],
    roles: ["Defense forces", "Shock-response units", "Extreme-environment work"],
    archiveNotes:
      "Emotional amplification is closely tied to thermal output and stress response.",
    knownFigures: [{ name: "Krrsh", href: "/orbit-and-the-outliers" }],
    accentClass: "pyroclast",
  },
  {
    key: "verdant-weave",
    designation: "V-04",
    name: "Verdant Weave",
    region: "Prism Gardens",
    energyType: "Photosynthetic Resonance",
    summary:
      "A deeply ecological lineage whose physiology co-developed alongside Virellia-7’s luminous biosystems.",
    traits: [
      "Forest-green skin with gold vein patterns",
      "Organic or moss-like hair textures",
      "Bark-textured antennae",
      "Plant-symbiotic regenerative behavior",
    ],
    roles: ["Ecological stewards", "Healers", "Cultural preservation"],
    archiveNotes:
      "Often regarded as a stabilizing force across the Crown ecosystem.",
    knownFigures: [{ name: "Mello Grave", href: "/orbit-and-the-outliers" }],
    accentClass: "verdantWeave",
  },
];

export const hybridClasses: HybridClass[] = [
  {
    key: "native-crown-hybrid",
    designation: "H-N",
    name: "Native Crown Hybrid",
    summary:
      "A fully Virellian classification marked by mixed lineage traits, mutation-born divergence, or unstable Crown expression.",
    traits: [
      "Fully Virellian origin",
      "Non-standard antenna forms",
      "Irregular energy output",
      "Rare but natural classification",
    ],
    classificationNote:
      "Recognized as a valid Virellian biological variance within the Crown system.",
    knownExample: {
      name: "Orbit the Oracle",
      href: "/orbit",
    },
    accentClass: "nativeHybrid",
  },
  {
    key: "cross-world-crown-hybrid",
    designation: "H-X",
    name: "Cross-World Crown Hybrid",
    summary:
      "A dual-world lineage born from one Virellian parent and one off-world parent, often marked by incomplete or unpredictable Crown expression.",
    traits: [
      "Mixed planetary inheritance",
      "Partial or muted Crown traits",
      "Irregular resonance response",
      "Extremely rare classification",
    ],
    classificationNote:
      "Biologically and politically sensitive due to off-world integration into Crown inheritance.",
    knownExample: {
      name: "Maira",
      href: "/maira",
    },
    accentClass: "crossWorldHybrid",
  },
];

export const crownProfiles: CrownProfile[] = [
  {
    name: "Nova Vox",
    designation: "L-01",
    classification: "Luminari",
    description: "Royal-line luminous adaptation with high Crown resonance.",
    href: "/nova",
    accentClass: "luminari",
  },
  {
    name: "Blistertone",
    designation: "A-02",
    classification: "Aetherion",
    description: "Conductive lineage shaped by magnetic elevation fields.",
    href: "/orbit-and-the-outliers",
    accentClass: "aetherion",
  },
  {
    name: "Krrsh",
    designation: "P-03",
    classification: "Pyroclast",
    description: "Thermal-adapted Crown expression with volatile energy output.",
    href: "/orbit-and-the-outliers",
    accentClass: "pyroclast",
  },
  {
    name: "Mello Grave",
    designation: "V-04",
    classification: "Verdant Weave",
    description: "Ecological lineage rooted in photosynthetic resonance.",
    href: "/orbit-and-the-outliers",
    accentClass: "verdantWeave",
  },
  {
    name: "Orbit the Oracle",
    designation: "H-N",
    classification: "Native Crown Hybrid",
    description: "Rare native hybrid variance with unstable Crown expression.",
    href: "/orbit",
    accentClass: "nativeHybrid",
  },
  {
    name: "Maira",
    designation: "H-X",
    classification: "Cross-World Crown Hybrid",
    description: "Half-human, half-Virellian inheritance between worlds.",
    href: "/maira",
    accentClass: "crossWorldHybrid",
  },
];