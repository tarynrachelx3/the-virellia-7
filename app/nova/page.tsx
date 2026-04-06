// app/nova/page.tsx

import { novaPageContent } from "@/lib/novapagecontent";
import styles from "./nova.module.css";
import Link from "next/link";

export default function NovaPage() {
  const { hero } = novaPageContent;

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
        id={novaPageContent.bio.id}
        label={novaPageContent.bio.sectionLabel}
        title={novaPageContent.bio.title}
      >
        <div className={styles.copyStack}>
          {novaPageContent.bio.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyCopy}>
              {paragraph}
            </p>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.traits.id}
        label={novaPageContent.traits.sectionLabel}
        title={novaPageContent.traits.title}
      >
        <ul className={styles.traitGrid}>
          {novaPageContent.traits.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={novaPageContent.music.id}
        label={novaPageContent.music.sectionLabel}
        title={novaPageContent.music.title}
      >
        <p className={styles.sectionIntro}>{novaPageContent.music.intro}</p>
        <div className={styles.cardGrid}>
          {novaPageContent.music.tracks.map((track) => (
            <article key={track.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{track.title}</h3>
              <p className={styles.cardText}>{track.description}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.quotes.id}
        label={novaPageContent.quotes.sectionLabel}
        title={novaPageContent.quotes.title}
      >
        <div className={styles.quoteStack}>
          {novaPageContent.quotes.items.map((quote) => (
            <blockquote key={quote} className={styles.quote}>
              “{quote.replace(/^“|”$/g, "")}”
            </blockquote>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.transmissions.id}
        label={novaPageContent.transmissions.sectionLabel}
        title={novaPageContent.transmissions.title}
      >
        <p className={styles.sectionIntro}>{novaPageContent.transmissions.intro}</p>
        <div className={styles.cardGrid}>
          {novaPageContent.transmissions.items.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.caption}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.canon.id}
        label={novaPageContent.canon.sectionLabel}
        title={novaPageContent.canon.title}
      >
        <div className={styles.detailGrid}>
          {novaPageContent.canon.stats.map((stat) => (
            <div key={stat.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{stat.label}</p>
              <p className={styles.detailValue}>{stat.value}</p>
            </div>
          ))}
        </div>

        <ul className={styles.noteList}>
          {novaPageContent.canon.notes.map((note) => (
            <li key={note} className={styles.noteItem}>
              {note}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={novaPageContent.gallery.id}
        label={novaPageContent.gallery.sectionLabel}
        title={novaPageContent.gallery.title}
      >
        <div className={styles.galleryCaptionGrid}>
          {novaPageContent.gallery.captions.map((caption) => (
            <div key={caption} className={styles.galleryCaptionCard}>
              {caption}
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.personality.id}
        label={novaPageContent.personality.sectionLabel}
        title={novaPageContent.personality.title}
      >
        <div className={styles.detailGrid}>
          {novaPageContent.personality.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.relationships.id}
        label={novaPageContent.relationships.sectionLabel}
        title={novaPageContent.relationships.title}
      >
        <div className={styles.cardGrid}>
          {novaPageContent.relationships.items.map((item) => (
            <Link key={item.name} href={item.href} className={styles.linkCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.motifs.id}
        label={novaPageContent.motifs.sectionLabel}
        title={novaPageContent.motifs.title}
      >
        <ul className={styles.traitGrid}>
          {novaPageContent.motifs.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={novaPageContent.status.id}
        label={novaPageContent.status.sectionLabel}
        title={novaPageContent.status.title}
      >
        <div className={styles.detailGrid}>
          {novaPageContent.status.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={novaPageContent.merch.id}
        label={novaPageContent.merch.sectionLabel}
        title={novaPageContent.merch.title}
      >
        <div className={styles.merchRow}>
          {novaPageContent.merch.items.map((item) => (
            <span key={item} className={styles.merchTag}>
              {item}
            </span>
          ))}
        </div>

        <Link href={novaPageContent.merch.cta.href} className={`${styles.button} ${styles.primary}`}>
          {novaPageContent.merch.cta.label}
        </Link>
      </TextSection>

      <section id={novaPageContent.finalCta.id} className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{novaPageContent.finalCta.headline}</h2>
        <p className={styles.finalCtaText}>{novaPageContent.finalCta.subhead}</p>

        <div className={styles.heroActions}>
          {novaPageContent.finalCta.actions.map((action) => (
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