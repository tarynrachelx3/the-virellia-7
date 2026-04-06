// app/maira/page.tsx

import Link from "next/link";
import { mairaPageContent } from "@/lib/mairapagecontent";
import styles from "./maira.module.css";

export default function MairaPage() {
  const { hero } = mairaPageContent;

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
        id={mairaPageContent.bio.id}
        label={mairaPageContent.bio.sectionLabel}
        title={mairaPageContent.bio.title}
      >
        <div className={styles.copyStack}>
          {mairaPageContent.bio.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyCopy}>
              {paragraph}
            </p>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={mairaPageContent.traits.id}
        label={mairaPageContent.traits.sectionLabel}
        title={mairaPageContent.traits.title}
      >
        <ul className={styles.traitGrid}>
          {mairaPageContent.traits.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={mairaPageContent.transmissions.id}
        label={mairaPageContent.transmissions.sectionLabel}
        title={mairaPageContent.transmissions.title}
      >
        <p className={styles.sectionIntro}>{mairaPageContent.transmissions.intro}</p>
        <div className={styles.cardGrid}>
          {mairaPageContent.transmissions.items.map((item) => (
            <article key={item.title} className={styles.infoCard}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.caption}</p>
            </article>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={mairaPageContent.quotes.id}
        label={mairaPageContent.quotes.sectionLabel}
        title={mairaPageContent.quotes.title}
      >
        <div className={styles.quoteStack}>
          {mairaPageContent.quotes.items.map((quote) => (
            <blockquote key={quote} className={styles.quote}>
              “{quote.replace(/^“|”$/g, "")}”
            </blockquote>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={mairaPageContent.personality.id}
        label={mairaPageContent.personality.sectionLabel}
        title={mairaPageContent.personality.title}
      >
        <div className={styles.detailGrid}>
          {mairaPageContent.personality.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={mairaPageContent.canon.id}
        label={mairaPageContent.canon.sectionLabel}
        title={mairaPageContent.canon.title}
      >
        <div className={styles.detailGrid}>
          {mairaPageContent.canon.stats.map((stat) => (
            <div key={stat.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{stat.label}</p>
              <p className={styles.detailValue}>{stat.value}</p>
            </div>
          ))}
        </div>

        <ul className={styles.noteList}>
          {mairaPageContent.canon.notes.map((note) => (
            <li key={note} className={styles.noteItem}>
              {note}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={mairaPageContent.gallery.id}
        label={mairaPageContent.gallery.sectionLabel}
        title={mairaPageContent.gallery.title}
      >
        <div className={styles.galleryGrid}>
          {mairaPageContent.gallery.captions.map((caption) => (
            <div key={caption} className={styles.galleryCard}>
              {caption}
            </div>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={mairaPageContent.relationships.id}
        label={mairaPageContent.relationships.sectionLabel}
        title={mairaPageContent.relationships.title}
      >
        <div className={styles.cardGrid}>
          {mairaPageContent.relationships.items.map((item) => (
            <Link key={item.name} href={item.href} className={styles.linkCard}>
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </Link>
          ))}
        </div>
      </TextSection>

      <TextSection
        id={mairaPageContent.motifs.id}
        label={mairaPageContent.motifs.sectionLabel}
        title={mairaPageContent.motifs.title}
      >
        <ul className={styles.traitGrid}>
          {mairaPageContent.motifs.items.map((item) => (
            <li key={item} className={styles.traitCard}>
              {item}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection
        id={mairaPageContent.status.id}
        label={mairaPageContent.status.sectionLabel}
        title={mairaPageContent.status.title}
      >
        <div className={styles.detailGrid}>
          {mairaPageContent.status.items.map((item) => (
            <div key={item.label} className={styles.detailCard}>
              <p className={styles.detailLabel}>{item.label}</p>
              <p className={styles.detailValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </TextSection>

      <section id={mairaPageContent.finalCta.id} className={styles.finalCta}>
        <h2 className={styles.finalCtaTitle}>{mairaPageContent.finalCta.headline}</h2>
        <p className={styles.finalCtaText}>{mairaPageContent.finalCta.subhead}</p>

        <div className={styles.heroActions}>
          {mairaPageContent.finalCta.actions.map((action) => (
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