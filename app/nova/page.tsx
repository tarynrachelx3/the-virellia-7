// app/nova/page.tsx

import { NovaPageContent } from "@/lib/NovaPageContent";
import styles from "./Nova.module.css";
import Link from "next/link";
import TextSection from "@/components/TextSection";

export default function NovaPage() {
  const { hero } = NovaPageContent;

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
        id={NovaPageContent.bio.id}
        label={NovaPageContent.bio.sectionLabel}
        title={NovaPageContent.bio.title}
      >
        <div className={styles.copyStack}>
          {NovaPageContent.bio.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyCopy}>
              {paragraph}
            </p>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.traits.id}
        label={NovaPageContent.traits.sectionLabel}
        title={NovaPageContent.traits.title}
      >
        <ul className={styles.traitGrid}>
          {NovaPageContent.traits.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={NovaPageContent.music.id}
        label={NovaPageContent.music.sectionLabel}
        title={NovaPageContent.music.title}
      >
        <p className={styles.sectionIntro}>{NovaPageContent.music.intro}</p>
        <div className={styles.cardGrid}>
          {NovaPageContent.music.tracks.map((track) => (
            <article key={track.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{track.title}</h3>
              <p className={styles.cardText}>{track.description}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.quotes.id}
        label={NovaPageContent.quotes.sectionLabel}
        title={NovaPageContent.quotes.title}
      >
        <div className={styles.quoteStack}>
          {NovaPageContent.quotes.items.map((quote) => (
            <blockquote key={quote} className={styles.quote}>
              “{quote.replace(/^“|”$/g, "")}”
            </blockquote>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.transmissions.id}
        label={NovaPageContent.transmissions.sectionLabel}
        title={NovaPageContent.transmissions.title}
      >
        <p className={styles.sectionIntro}>{NovaPageContent.transmissions.intro}</p>
        <div className={styles.cardGrid}>
          {NovaPageContent.transmissions.items.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.caption}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.canon.id}
        label={NovaPageContent.canon.sectionLabel}
        title={NovaPageContent.canon.title}
      >
        <div className={styles.detailGrid}>
          {NovaPageContent.canon.stats.map((stat) => (
            <div key={stat.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{stat.label}</p>
              <p className={styles.detailValue}>{stat.value}</p>
            </div>
          ))}
        </div>

        <ul className={styles.noteList}>
          {NovaPageContent.canon.notes.map((note) => (
            <li key={note} className={styles.noteItem}>
              {note}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={NovaPageContent.gallery.id}
        label={NovaPageContent.gallery.sectionLabel}
        title={NovaPageContent.gallery.title}
      >
        <div className={styles.galleryCaptionGrid}>
          {NovaPageContent.gallery.captions.map((caption) => (
            <div key={caption} className={styles.galleryCaptionCard}>
              {caption}
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.personality.id}
        label={NovaPageContent.personality.sectionLabel}
        title={NovaPageContent.personality.title}
      >
        <div className={styles.detailGrid}>
          {NovaPageContent.personality.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.relationships.id}
        label={NovaPageContent.relationships.sectionLabel}
        title={NovaPageContent.relationships.title}
      >
        <div className={styles.cardGrid}>
          {NovaPageContent.relationships.items.map((item) => (
            <Link key={item.name} href={item.href} className={styles.linkCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.motifs.id}
        label={NovaPageContent.motifs.sectionLabel}
        title={NovaPageContent.motifs.title}
      >
        <ul className={styles.traitGrid}>
          {NovaPageContent.motifs.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={NovaPageContent.status.id}
        label={NovaPageContent.status.sectionLabel}
        title={NovaPageContent.status.title}
      >
        <div className={styles.detailGrid}>
          {NovaPageContent.status.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={NovaPageContent.merch.id}
        label={NovaPageContent.merch.sectionLabel}
        title={NovaPageContent.merch.title}
      >
        <div className={styles.merchRow}>
          {NovaPageContent.merch.items.map((item) => (
            <span key={item} className={styles.merchTag}>
              {item}
            </span>
          ))}
        </div>

        <Link href={NovaPageContent.merch.cta.href} className={`${styles.button} ${styles.primary}`}>
          {NovaPageContent.merch.cta.label}
        </Link>
      </TextSection>

      <section id={NovaPageContent.finalCta.id} className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{NovaPageContent.finalCta.headline}</h2>
        <p className={styles.finalCtaText}>{NovaPageContent.finalCta.subhead}</p>

        <div className={styles.heroActions}>
          {NovaPageContent.finalCta.actions.map((action) => (
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
