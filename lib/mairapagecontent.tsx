// lib/mairaPageContent.ts

export const mairaPageContent = {
  hero: {
    eyebrow: "VIRELLIA-7 // SOFT SIGNAL",
    headline: "i feel things… i just don’t explain them",
    subhead:
      "Maira captures the quiet emotional weight of everyday moments—soft, self-aware, and slightly somewhere else.",
    ctas: [
      { label: "ENTER MAIRA’S WORLD", href: "#bio", variant: "primary" },
      { label: "LATEST MOMENTS", href: "#transmissions", variant: "secondary" },
      { label: "WATCH", href: "#transmissions", variant: "ghost" },
    ],
  },

  bio: {
    id: "bio",
    sectionLabel: "WHO IS MAIRA",
    title: "she notices everything. she explains almost none of it.",
    paragraphs: [
      "Maira exists somewhere between understanding and avoiding it.",
      "She notices everything—energy, shifts, the things people don’t say—but rarely explains what it means. After discovering she’s half alien, and that Nova is her twin, things started making more sense… just not in a way she fully processes.",
      "She could define herself. She just doesn’t finish the thought.",
    ],
  },

  traits: {
    id: "traits",
    sectionLabel: "SIGNATURE TRAITS",
    title: "quiet patterns you only notice if you’re paying attention",
    items: [
      "Notices everything. Says half of it.",
      "Soft voice. Heavy thoughts.",
      "Feels deeply. Explains nothing.",
      "Present, but slightly elsewhere.",
      "Attaches quietly. Leaves quietly.",
      "“it’s fine” (it isn’t)",
    ],
  },

  transmissions: {
    id: "transmissions",
    sectionLabel: "LATEST MOMENTS",
    title: "small thoughts that feel bigger later",
    intro:
      "Late-night observations, half-finished thoughts, and things she probably wasn’t going to say out loud.",
    items: [
      {
        title: "BE HONEST",
        caption: "be honest… you can feel when something changes, right?",
      },
      {
        title: "NOTICING THINGS",
        caption: "i’m not overthinking… i’m just noticing everything",
      },
      {
        title: "IT’S FINE",
        caption: "it’s fine… i just don’t like how it felt",
      },
    ],
  },

  quotes: {
    id: "quotes",
    sectionLabel: "THINGS SHE SAYS",
    title: "she didn’t mean for these to stay with you",
    items: [
      "i don’t even need an explanation… i can tell",
      "i hate when something makes sense too quickly",
      "i feel the same… but like… not in the same way",
      "i didn’t say anything… but i noticed",
      "it’s weird how you can feel something shift",
      "i’m calm, i just don’t feel the same anymore",
      "i don’t wanna talk about it… but like… yeah",
      "i feel like i knew this was gonna happen",
      "it’s not even that deep… but still",
      "i act normal but my brain doesn’t",
    ],
  },

  personality: {
    id: "personality",
    sectionLabel: "BEHAVIORAL PATTERNS",
    title: "she’ll understand it before she reacts to it",
    items: [
      { label: "What she says", value: "“it’s not even that deep… but still”" },
      { label: "What she avoids", value: "explaining things all the way" },
      { label: "What she notices", value: "everything she wishes she didn’t" },
      { label: "What ruins her mood", value: "realizing she was right" },
      { label: "What she’d never admit", value: "she already cared more than she should" },
    ],
  },

  canon: {
    id: "canon",
    sectionLabel: "CLASSIFIED FILE",
    title: "half understood. fully felt.",
    stats: [
      { label: "Origin", value: "Earth / Virellia-7 (hybrid)" },
      { label: "Status", value: "Observer / emotional signal" },
      { label: "Known for", value: "quietly understanding things before they’re said" },
      { label: "Behavior", value: "processes internally, responds externally later" },
    ],
    notes: [
      "Often aware of emotional shifts before others acknowledge them.",
      "Prefers sitting with feelings over defining them.",
      "Disappears and reappears without explanation.",
    ],
  },

  gallery: {
    id: "gallery",
    sectionLabel: "SIGHTINGS",
    title: "moments that felt small at the time",
    captions: [
      "looks calm. is thinking about everything.",
      "late-night energy hits differently",
      "she didn’t say anything… but it changed",
      "it made sense too quickly",
    ],
  },

  relationships: {
    id: "relationships",
    sectionLabel: "PROXIMITY",
    title: "she feels people before she understands them",
    items: [
      {
        name: "Nova Vox",
        description: "not just her twin. something deeper she hasn’t fully processed.",
        href: "/nova",
      },
      {
        name: "Mello",
        description: "the one thing that feels stable when everything else doesn’t.",
        href: "#",
      },
    ],
  },

  motifs: {
    id: "motifs",
    sectionLabel: "RECURRING THEMES",
    title: "patterns she notices but doesn’t interrupt",
    items: [
      "feeling something before understanding it",
      "saying less than she knows",
      "quiet attachment",
      "emotional awareness without confrontation",
      "things shifting without explanation",
    ],
  },

  status: {
    id: "status",
    sectionLabel: "CURRENT READINGS",
    title: "nothing is wrong. something just feels different.",
    items: [
      { label: "Signal Strength", value: "Subtle but constant" },
      { label: "Emotional Awareness", value: "High" },
      { label: "Expression Level", value: "Limited" },
      { label: "Latest State", value: "Thinking about it, not saying it" },
      { label: "Most Common Outcome", value: "“it’s fine”" },
    ],
  },

  finalCta: {
    id: "final-cta",
    headline: "she was going to say something…",
    subhead: "but she didn’t.",
    actions: [
      { label: "WATCH", href: "#transmissions", variant: "primary" },
      { label: "ENTER NOVA’S WORLD", href: "/nova", variant: "secondary" },
      { label: "ENTER ORBIT’S SPIRAL", href: "/orbit", variant: "ghost" },
    ],
  },
} as const;