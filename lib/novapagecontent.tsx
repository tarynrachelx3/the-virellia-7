// lib/novaPageContent.ts

export const novaPageContent = {
  hero: {
    eyebrow: "VIRELLIA-7 // PRIMARY SIGNAL",
    headline: "Emotionally unavailable. Still your favorite.",
    subhead:
      "Nova Vox is Virellia-7’s most watched signal—dark-pop, deadpan, and slightly dangerous.",
    ctas: [
      { label: "ENTER NOVA’S WORLD", href: "#bio", variant: "primary" },
      { label: "LATEST TRANSMISSION", href: "#transmissions", variant: "secondary" },
      { label: "LISTEN NOW", href: "#music", variant: "ghost" },
    ],
  },

  bio: {
    id: "bio",
    sectionLabel: "WHO IS NOVA",
    title: "Observed once. Remembered permanently.",
    paragraphs: [
      "Nova Vox didn’t become famous. She was observed… and then it was too late.",
      "Born on Virellia-7 and refined somewhere between royalty and rumor, Nova turned emotional detachment into an art form. Her voice doesn’t chase attention—it pulls it. Slowly. Inevitably.",
      "Humans call it obsession. She calls it a side effect.",
    ],
  },

  traits: {
    id: "traits",
    sectionLabel: "SIGNATURE TRAITS",
    title: "Recognizable on sight. Regrettable to underestimate.",
    items: [
      "Emerald skin. Zero apologies.",
      "Platinum hair that behaves better than most people.",
      "Antennae that glow when you’re lying.",
      "Deadpan delivery. Maximum damage.",
      "Reads the room. Judges it silently.",
      "Emotionally unavailable—but somehow still the problem.",
    ],
  },

  music: {
    id: "music",
    sectionLabel: "CURRENT SIGNAL",
    title: "Songs for bad decisions with excellent lighting.",
    intro:
      "A polished spiral of dark-pop confession, control, and consequences.",
    tracks: [
      {
        title: "LOW GRAVITY PROBLEMS",
        description: "You said you were leaving. Your orbit disagreed.",
      },
      {
        title: "VIP (Very Imitated Person)",
        description: "They study her. They still don’t understand her.",
      },
      {
        title: "BLOCKED & OBSESSED",
        description: "Access denied. Interest… not denied.",
      },
    ],
  },

  quotes: {
    id: "quotes",
    sectionLabel: "ICONIC LINES",
    title: "Things she said once. Things people repeated forever.",
    items: [
      "That’s not love. That’s gravity.",
      "Anyway.",
      "You can leave. You just won’t.",
      "I don’t chase. I observe outcomes.",
      "You said closure. I heard encore.",
    ],
  },

  transmissions: {
    id: "transmissions",
    sectionLabel: "LATEST TRANSMISSIONS",
    title: "Short messages. Long consequences.",
    intro:
      "Signals, sightings, and deadpan incidents captured in motion.",
    items: [
      {
        title: "READ THE ROOM",
        caption: "Humans say ‘read the room.’ It said nothing.",
      },
      {
        title: "FLIRTING ATTEMPT",
        caption: "Flirting attempt. Unsuccessful. Repeating anyway.",
      },
      {
        title: "HONESTY REPORT",
        caption: "They told me to be honest. I was. They didn’t like it.",
      },
    ],
  },

  canon: {
    id: "canon",
    sectionLabel: "CLASSIFIED FILE",
    title: "Public figure. Private intentions.",
    stats: [
      { label: "Origin", value: "Virellia-7" },
      { label: "Status", value: "Public figure / private intentions" },
      { label: "Affiliation", value: "Cruel World Airlines (Priority Clearance)" },
      { label: "Known for", value: "Causing emotional instability without raising her voice" },
    ],
    notes: [
      "Presence alters decision-making patterns in nearby humans.",
      "Eye contact duration linked to poor life choices.",
      "Frequently described as ‘worth it’ immediately before regret.",
    ],
  },

  gallery: {
    id: "gallery",
    sectionLabel: "SIGHTINGS",
    title: "If you saw her, you didn’t imagine it.",
    captions: [
      "First class. Always.",
      "After midnight is when she’s most honest.",
      "Looks expensive. Is expensive.",
      "Silence is usually intentional.",
    ],
  },

  personality: {
    id: "personality",
    sectionLabel: "BEHAVIORAL PATTERNS",
    title: "Predictable only in how dangerous she isn’t to herself.",
    items: [
      { label: "What she says", value: "“Interesting.” (It’s not.)" },
      { label: "What she avoids", value: "Explaining herself twice." },
      { label: "What she notices", value: "Everything you hoped she wouldn’t." },
      { label: "What ruins her mood", value: "Predictability." },
      { label: "What she’d never admit", value: "She already knew how it would end." },
    ],
  },

  relationships: {
    id: "relationships",
    sectionLabel: "PROXIMITY ALERT",
    title: "No one stays unaffected for long.",
    items: [
      {
        name: "Orbit the Oracle",
        description: "Loud feelings. Worse decisions. Still orbiting.",
        href: "/orbit",
      },
      {
        name: "Maira",
        description: "Human. Observant. Occasionally correct.",
        href: "/maira",
      },
    ],
  },

  motifs: {
    id: "motifs",
    sectionLabel: "RECURRING THEMES",
    title: "Patterns people call jokes until they become personal.",
    items: [
      "Bad decisions, but aesthetically pleasing.",
      "Saying less, meaning more.",
      "Leaving without actually leaving.",
      "Emotional chaos with luxury packaging.",
      "Being right in a way that feels personal.",
    ],
  },

  status: {
    id: "status",
    sectionLabel: "CURRENT READINGS",
    title: "The numbers are not reassuring.",
    items: [
      { label: "Signal Strength", value: "High" },
      { label: "Public Interest", value: "Unstable" },
      { label: "Emotional Damage Reports", value: "Increasing" },
      { label: "Latest Sighting", value: "First Class, Virellia-7 inbound" },
      { label: "Most Common Outcome", value: "“I thought I was fine.”" },
    ],
  },

  merch: {
    id: "merch",
    sectionLabel: "AUTHORIZED VISUALS",
    title: "Wear at your own risk.",
    items: ["PRETTY WHEN I’M PETTY", "LOOK BUT DON’T", "VOX"],
    cta: { label: "SHOP NOVA ESSENTIALS", href: "/shop" },
  },

  finalCta: {
    id: "final-cta",
    headline: "You can leave whenever you want.",
    subhead: "No one does.",
    actions: [
      { label: "LISTEN NOW", href: "#music", variant: "primary" },
      { label: "WATCH TRANSMISSIONS", href: "#transmissions", variant: "secondary" },
      { label: "ENTER ORBIT’S SPIRAL", href: "/orbit", variant: "ghost" },
    ],
  },
} as const;