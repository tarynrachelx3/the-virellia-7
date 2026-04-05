// lib/orbitPageContent.ts

export const orbitPageContent = {
  hero: {
    eyebrow: "VIRELLIA-7 // UNSTABLE SIGNAL",
    headline: "He calls it closure. It’s usually a public event.",
    subhead:
      "Orbit the Oracle is Virellia-7’s most emotionally reckless broadcast—chaotic, magnetic, loud-hearted, and impossible to fully mute.",
    ctas: [
      { label: "ENTER ORBIT’S SPIRAL", href: "#bio", variant: "primary" },
      { label: "LATEST MELTDOWN", href: "#transmissions", variant: "secondary" },
      { label: "LISTEN NOW", href: "#music", variant: "ghost" },
    ],
  },

  bio: {
    id: "bio",
    sectionLabel: "WHO IS ORBIT",
    title: "All feeling. No braking system.",
    paragraphs: [
      "Orbit the Oracle did not arrive composed. He arrived fully lit, emotionally overcommitted, and already halfway through a bad idea.",
      "Somewhere between prophet, frontman, and spectacular cautionary tale, Orbit turns fixation into theater. He does not process quietly. He performs the damage in real time.",
      "If Nova is the calm before regret, Orbit is the regrettable decision singing directly into the microphone.",
    ],
  },

  traits: {
    id: "traits",
    sectionLabel: "SIGNATURE TRAITS",
    title: "Recognizable immediately. Stable almost never.",
    items: [
      "Pink-purple skin with zero chill.",
      "Long frizzy red hair in permanent emotional weather.",
      "Flame-shaped antennae that look like they know better.",
      "Torn hoodie, cracked heart shades, maximum commitment.",
      "Says too much. Means all of it.",
      "Weaponized yearning with frontman posture.",
    ],
  },

  music: {
    id: "music",
    sectionLabel: "CURRENT SIGNAL",
    title: "Songs for spiraling beautifully in public.",
    intro:
      "Rap-rock confession, emotional overkill, and party-scene self-destruction with hooks you can yell back at 1:13 a.m.",
    tracks: [
      {
        title: "I’M OVER YOU... PROBABLY",
        description: "He moved on loudly, badly, and with several witnesses.",
      },
      {
        title: "MY THERAPIST BLOCKED ME (AGAIN)",
        description: "Accountability was attempted. Briefly.",
      },
      {
        title: "BLOCKED & OBSESSED",
        description: "Still denied. Still committed. Still outside emotionally.",
      },
    ],
  },

  quotes: {
    id: "quotes",
    sectionLabel: "ICONIC LINES",
    title: "Statements made under full emotional influence.",
    items: [
      "I respect your boundaries. I’m still upset about them.",
      "This is healing. Don’t look at the fire.",
      "I’m not spiraling. I’m worldbuilding.",
      "She moved on. I made it everyone’s problem.",
      "I brought closure. It got loud.",
    ],
  },

  transmissions: {
    id: "transmissions",
    sectionLabel: "LATEST TRANSMISSIONS",
    title: "Short messages. Large consequences.",
    intro:
      "Breakdowns, warnings, and emotionally expensive field reports captured in motion.",
    items: [
      {
        title: "BOUNDARIES REPORT",
        caption: "I heard ‘space’ and interpreted it creatively.",
      },
      {
        title: "RECOVERY UPDATE",
        caption: "Doing better in ways that remain deeply unconvincing.",
      },
      {
        title: "PUBLIC SPIRAL",
        caption: "He said he was fine. The room disagreed.",
      },
    ],
  },

  canon: {
    id: "canon",
    sectionLabel: "CLASSIFIED FILE",
    title: "High volatility. Extremely quotable.",
    stats: [
      { label: "Origin", value: "Virellia-7" },
      { label: "Status", value: "Frontman / warning sign / fan favorite" },
      { label: "Affiliation", value: "Orbit & the Outliers" },
      { label: "Known for", value: "Turning personal collapse into crowd participation" },
    ],
    notes: [
      "Emotional intensity increases in the presence of exes, microphones, or neon lighting.",
      "Should not be asked if he is over it unless time is available.",
      "Frequently described as ‘concerning’ immediately before applause.",
    ],
  },

  gallery: {
    id: "gallery",
    sectionLabel: "SIGHTINGS",
    title: "If you saw him, he was probably mid-sentence.",
    captions: [
      "Looks haunted. Is booked.",
      "After midnight is when the honesty gets dangerous.",
      "Some outfits are cries for help. This one is merch-ready.",
      "The glow usually means nothing good.",
    ],
  },

  personality: {
    id: "personality",
    sectionLabel: "BEHAVIORAL PATTERNS",
    title: "Predictable only in volume.",
    items: [
      { label: "What he says", value: "“I’m over it.” (Historic lie.)" },
      { label: "What he avoids", value: "Silence, nuance, and hydration." },
      { label: "What he notices", value: "Every mixed signal ever sent." },
      { label: "What ruins his mood", value: "Being ignored with confidence." },
      { label: "What he’d never admit", value: "He rehearsed that speech twice." },
    ],
  },

  relationships: {
    id: "relationships",
    sectionLabel: "PROXIMITY ALERT",
    title: "No contact would be cleaner. No one chose that.",
    items: [
      {
        name: "Nova Vox",
        description: "Calm, impossible, and still somehow the center of gravity.",
        href: "/nova",
      },
      {
        name: "Orbit & the Outliers",
        description: "The only people professionally equipped to survive his energy.",
        href: "/orbit#band",
      },
    ],
  },

  motifs: {
    id: "motifs",
    sectionLabel: "RECURRING THEMES",
    title: "Patterns mistaken for jokes until the lyrics start.",
    items: [
      "Loving too hard and styling it like a headline.",
      "Throwing the party instead of processing the feeling.",
      "Self-awareness with absolutely no stopping power.",
      "Emotional chaos with a shout-along chorus.",
      "Being one text away from content.",
    ],
  },

  status: {
    id: "status",
    sectionLabel: "CURRENT READINGS",
    title: "The instruments recommend distance.",
    items: [
      { label: "Signal Strength", value: "Uncontained" },
      { label: "Public Interest", value: "Alarmingly high" },
      { label: "Impulse Control", value: "Unavailable" },
      { label: "Latest Sighting", value: "Backstage, saying he’s fine too quickly" },
      { label: "Most Common Outcome", value: "“Okay, but hear me out.”" },
    ],
  },

  merch: {
    id: "merch",
    sectionLabel: "AUTHORIZED VISUALS",
    title: "Wear the incident.",
    items: ["OUTSIDE EMOTIONALLY", "OVER YOU... PROBABLY", "ORBIT"],
    cta: { label: "SHOP ORBIT ESSENTIALS", href: "/shop" },
  },

  finalCta: {
    id: "final-cta",
    headline: "He said this was the last time.",
    subhead: "No one believed him.",
    actions: [
      { label: "LISTEN NOW", href: "#music", variant: "primary" },
      { label: "WATCH TRANSMISSIONS", href: "#transmissions", variant: "secondary" },
      { label: "ENTER NOVA’S WORLD", href: "/nova", variant: "ghost" },
    ],
  },
} as const;