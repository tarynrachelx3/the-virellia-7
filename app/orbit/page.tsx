// app/orbit/page.tsx

import Link from "next/link";
import { orbitPageContent } from "@/lib/orbitpagecontent";
import styles from "./orbit.module.css";

export default function OrbitPage() {
  const { hero } = orbitPageContent;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{hero.headline}</h1>
          <p className={styles.heroSubhead}>{hero.subhead}</p>

          <div className={styles.heroActions}>
            {hero.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={`${styles.button} ${styles[cta.variant]}`}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TextSection
        id={orbitPageContent.bio.id}
        label={orbitPageContent.bio.sectionLabel}
        title={orbitPageContent.bio.title}
      >
        <div className={styles.copyStack}>
          {orbitPageContent.bio.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyCopy}>
              {paragraph}
            </p>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.traits.id}
        label={orbitPageContent.traits.sectionLabel}
        title={orbitPageContent.traits.title}
      >
        <ul className={styles.traitGrid}>
          {orbitPageContent.traits.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={orbitPageContent.music.id}
        label={orbitPageContent.music.sectionLabel}
        title={orbitPageContent.music.title}
      >
        <p className={styles.sectionIntro}>{orbitPageContent.music.intro}</p>
        <div className={styles.cardGrid}>
          {orbitPageContent.music.tracks.map((track) => (
            <article key={track.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{track.title}</h3>
              <p className={styles.cardText}>{track.description}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.quotes.id}
        label={orbitPageContent.quotes.sectionLabel}
        title={orbitPageContent.quotes.title}
      >
        <div className={styles.quoteStack}>
          {orbitPageContent.quotes.items.map((quote) => (
            <blockquote key={quote} className={styles.quote}>
              “{quote.replace(/^“|”$/g, "")}”
            </blockquote>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.transmissions.id}
        label={orbitPageContent.transmissions.sectionLabel}
        title={orbitPageContent.transmissions.title}
      >
        <p className={styles.sectionIntro}>{orbitPageContent.transmissions.intro}</p>
        <div className={styles.cardGrid}>
          {orbitPageContent.transmissions.items.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.caption}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.canon.id}
        label={orbitPageContent.canon.sectionLabel}
        title={orbitPageContent.canon.title}
      >
        <div className={styles.detailGrid}>
          {orbitPageContent.canon.stats.map((stat) => (
            <div key={stat.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{stat.label}</p>
              <p className={styles.detailValue}>{stat.value}</p>
            </div>
          ))}
        </div>

        <ul className={styles.noteList}>
          {orbitPageContent.canon.notes.map((note) => (
            <li key={note} className={styles.noteItem}>
              {note}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={orbitPageContent.gallery.id}
        label={orbitPageContent.gallery.sectionLabel}
        title={orbitPageContent.gallery.title}
      >
        <div className={styles.galleryCaptionGrid}>
          {orbitPageContent.gallery.captions.map((caption) => (
            <div key={caption} className={styles.galleryCaptionCard}>
              {caption}
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.personality.id}
        label={orbitPageContent.personality.sectionLabel}
        title={orbitPageContent.personality.title}
      >
        <div className={styles.detailGrid}>
          {orbitPageContent.personality.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.relationships.id}
        label={orbitPageContent.relationships.sectionLabel}
        title={orbitPageContent.relationships.title}
      >
        <div className={styles.cardGrid}>
          {orbitPageContent.relationships.items.map((item) => (
            <Link key={item.name} href={item.href} className={styles.linkCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.motifs.id}
        label={orbitPageContent.motifs.sectionLabel}
        title={orbitPageContent.motifs.title}
      >
        <ul className={styles.traitGrid}>
          {orbitPageContent.motifs.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={orbitPageContent.status.id}
        label={orbitPageContent.status.sectionLabel}
        title={orbitPageContent.status.title}
      >
        <div className={styles.detailGrid}>
          {orbitPageContent.status.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={orbitPageContent.merch.id}
        label={orbitPageContent.merch.sectionLabel}
        title={orbitPageContent.merch.title}
      >
        <div className={styles.merchRow}>
          {orbitPageContent.merch.items.map((item) => (
            <span key={item} className={styles.merchTag}>
              {item}
            </span>
          ))}
        </div>

        <Link
          href={orbitPageContent.merch.cta.href}
          className={`${styles.button} ${styles.primary}`}
        >
          {orbitPageContent.merch.cta.label}
        </Link>
      </TextSection>

      <section id={orbitPageContent.finalCta.id} className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>
          {orbitPageContent.finalCta.headline}
        </h2>
        <p className={styles.finalCtaText}>{orbitPageContent.finalCta.subhead}</p>

        <div className={styles.heroActions}>
          {orbitPageContent.finalCta.actions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`${styles.button} ${styles[action.variant]}`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

type TextSectionProps = {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

function TextSection({ id, label, title, children }: TextSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHeader}>
        <p className={styles.sectionLabel}>{label}</p>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionContent}>{children}</div>
    </section>
  );
}