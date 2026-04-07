// app/maira/page.tsx

import Link from "next/link";
import { MairaPageContent } from "@/lib/MairaPageContent";
import styles from "./Maira.module.css";
import Image from "next/image";
import TextSection from "@/components/TextSection";

export default function MairaPage() {
  const { hero } = MairaPageContent;

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/maira-card.png"
            alt="Maira"
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
        id={MairaPageContent.bio.id}
        label={MairaPageContent.bio.sectionLabel}
        title={MairaPageContent.bio.title}
      >
        <div className={styles.copyStack}>
          {MairaPageContent.bio.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyCopy}>
              {paragraph}
            </p>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={MairaPageContent.traits.id}
        label={MairaPageContent.traits.sectionLabel}
        title={MairaPageContent.traits.title}
      >
        <ul className={styles.traitGrid}>
          {MairaPageContent.traits.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={MairaPageContent.transmissions.id}
        label={MairaPageContent.transmissions.sectionLabel}
        title={MairaPageContent.transmissions.title}
      >
        <p className={styles.sectionIntro}>{MairaPageContent.transmissions.intro}</p>
        <div className={styles.cardGrid}>
          {MairaPageContent.transmissions.items.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.caption}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={MairaPageContent.quotes.id}
        label={MairaPageContent.quotes.sectionLabel}
        title={MairaPageContent.quotes.title}
      >
        <div className={styles.quoteStack}>
          {MairaPageContent.quotes.items.map((quote) => (
            <blockquote key={quote} className={styles.quote}>
              “{quote.replace(/^“|”$/g, "")}”
            </blockquote>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={MairaPageContent.personality.id}
        label={MairaPageContent.personality.sectionLabel}
        title={MairaPageContent.personality.title}
      >
        <div className={styles.detailGrid}>
          {MairaPageContent.personality.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={MairaPageContent.canon.id}
        label={MairaPageContent.canon.sectionLabel}
        title={MairaPageContent.canon.title}
      >
        <div className={styles.detailGrid}>
          {MairaPageContent.canon.stats.map((stat) => (
            <div key={stat.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{stat.label}</p>
              <p className={styles.detailValue}>{stat.value}</p>
            </div>
          ))}
        </div>

        <ul className={styles.noteList}>
          {MairaPageContent.canon.notes.map((note) => (
            <li key={note} className={styles.noteItem}>
              {note}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={MairaPageContent.gallery.id}
        label={MairaPageContent.gallery.sectionLabel}
        title={MairaPageContent.gallery.title}
      >
        <div className={styles.galleryGrid}>
          {MairaPageContent.gallery.captions.map((caption) => (
            <div key={caption} className={styles.galleryCard}>
              {caption}
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={MairaPageContent.relationships.id}
        label={MairaPageContent.relationships.sectionLabel}
        title={MairaPageContent.relationships.title}
      >
        <div className={styles.cardGrid}>
          {MairaPageContent.relationships.items.map((item) => (
            <Link key={item.name} href={item.href} className={styles.linkCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={MairaPageContent.motifs.id}
        label={MairaPageContent.motifs.sectionLabel}
        title={MairaPageContent.motifs.title}
      >
        <ul className={styles.traitGrid}>
          {MairaPageContent.motifs.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={MairaPageContent.status.id}
        label={MairaPageContent.status.sectionLabel}
        title={MairaPageContent.status.title}
      >
        <div className={styles.detailGrid}>
          {MairaPageContent.status.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <section id={MairaPageContent.finalCta.id} className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{MairaPageContent.finalCta.headline}</h2>
        <p className={styles.finalCtaText}>{MairaPageContent.finalCta.subhead}</p>

        <div className={styles.heroActions}>
          {MairaPageContent.finalCta.actions.map((action) => (
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
