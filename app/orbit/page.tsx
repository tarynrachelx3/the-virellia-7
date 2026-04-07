// app/orbit/page.tsx

import Link from "next/link";
import { OrbitPageContent } from "@/lib/OrbitPageContent";
import styles from "./Orbit.module.css";
import Image from "next/image";
import TextSection from "@/components/TextSection";

export default function OrbitPage() {
  const { hero } = OrbitPageContent;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>

        <div className={styles.heroBackground}>
          <Image
            src="/images/orbit-card.png"
            alt="Orbit the Oracle"
            fill
            priority
            className={styles.heroImage}
          />
        </div>
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
        id={OrbitPageContent.bio.id}
        label={OrbitPageContent.bio.sectionLabel}
        title={OrbitPageContent.bio.title}
      >
        <div className={styles.copyStack}>
          {OrbitPageContent.bio.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyCopy}>
              {paragraph}
            </p>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.traits.id}
        label={OrbitPageContent.traits.sectionLabel}
        title={OrbitPageContent.traits.title}
      >
        <ul className={styles.traitGrid}>
          {OrbitPageContent.traits.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={OrbitPageContent.music.id}
        label={OrbitPageContent.music.sectionLabel}
        title={OrbitPageContent.music.title}
      >
        <p className={styles.sectionIntro}>{OrbitPageContent.music.intro}</p>
        <div className={styles.cardGrid}>
          {OrbitPageContent.music.tracks.map((track) => (
            <article key={track.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{track.title}</h3>
              <p className={styles.cardText}>{track.description}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.quotes.id}
        label={OrbitPageContent.quotes.sectionLabel}
        title={OrbitPageContent.quotes.title}
      >
        <div className={styles.quoteStack}>
          {OrbitPageContent.quotes.items.map((quote) => (
            <blockquote key={quote} className={styles.quote}>
              “{quote.replace(/^“|”$/g, "")}”
            </blockquote>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.transmissions.id}
        label={OrbitPageContent.transmissions.sectionLabel}
        title={OrbitPageContent.transmissions.title}
      >
        <p className={styles.sectionIntro}>{OrbitPageContent.transmissions.intro}</p>
        <div className={styles.cardGrid}>
          {OrbitPageContent.transmissions.items.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.caption}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.canon.id}
        label={OrbitPageContent.canon.sectionLabel}
        title={OrbitPageContent.canon.title}
      >
        <div className={styles.detailGrid}>
          {OrbitPageContent.canon.stats.map((stat) => (
            <div key={stat.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{stat.label}</p>
              <p className={styles.detailValue}>{stat.value}</p>
            </div>
          ))}
        </div>

        <ul className={styles.noteList}>
          {OrbitPageContent.canon.notes.map((note) => (
            <li key={note} className={styles.noteItem}>
              {note}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={OrbitPageContent.gallery.id}
        label={OrbitPageContent.gallery.sectionLabel}
        title={OrbitPageContent.gallery.title}
      >
        <div className={styles.galleryCaptionGrid}>
          {OrbitPageContent.gallery.captions.map((caption) => (
            <div key={caption} className={styles.galleryCaptionCard}>
              {caption}
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.personality.id}
        label={OrbitPageContent.personality.sectionLabel}
        title={OrbitPageContent.personality.title}
      >
        <div className={styles.detailGrid}>
          {OrbitPageContent.personality.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.relationships.id}
        label={OrbitPageContent.relationships.sectionLabel}
        title={OrbitPageContent.relationships.title}
      >
        <div className={styles.cardGrid}>
          {OrbitPageContent.relationships.items.map((item) => (
            <Link key={item.name} href={item.href} className={styles.linkCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.motifs.id}
        label={OrbitPageContent.motifs.sectionLabel}
        title={OrbitPageContent.motifs.title}
      >
        <ul className={styles.traitGrid}>
          {OrbitPageContent.motifs.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={OrbitPageContent.status.id}
        label={OrbitPageContent.status.sectionLabel}
        title={OrbitPageContent.status.title}
      >
        <div className={styles.detailGrid}>
          {OrbitPageContent.status.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={OrbitPageContent.merch.id}
        label={OrbitPageContent.merch.sectionLabel}
        title={OrbitPageContent.merch.title}
      >
        <div className={styles.merchRow}>
          {OrbitPageContent.merch.items.map((item) => (
            <span key={item} className={styles.merchTag}>
              {item}
            </span>
          ))}
        </div>

        <Link
          href={OrbitPageContent.merch.cta.href}
          className={`${styles.button} ${styles.primary}`}
        >
          {OrbitPageContent.merch.cta.label}
        </Link>
      </TextSection>

      <section id={OrbitPageContent.finalCta.id} className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>
          {OrbitPageContent.finalCta.headline}
        </h2>
        <p className={styles.finalCtaText}>{OrbitPageContent.finalCta.subhead}</p>

        <div className={styles.heroActions}>
          {OrbitPageContent.finalCta.actions.map((action) => (
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
