import Image from "next/image";
import styles from "./WorldSection.module.css";
import sectionStyles from "./SectionIntro.module.css";
import gridStyles from "./CardsGrid.module.css";
import CharacterCard from "./CharacterCard";
import TransmissionCard from "./TransmissionCard";

export default function WorldSection() {
  return (
    <section className={styles.section}>
          <Image
            src="/images/world-section/world-section-bg.png"
            alt="Nova Vox and Orbit the Oracle"
            fill
            priority
            className={styles.heroImage}
          />

      <div className={styles.inner}>
        <div className={sectionStyles.intro}>
          <h2 className={sectionStyles.title}>
            A WORLD BUILT ON GLAMOUR, GRAVITY, AND BAD DECISIONS
          </h2>
          <p className={sectionStyles.description}>
            Welcome to Virellia-7, where alien pop royalty, chaotic lore, and emotionally expensive decisions live under the same stars.
          </p>
        </div>

        <div className={gridStyles.grid}>
          <CharacterCard
            title="NOVA VOX"
            subtitle="Alien pop sovereign."
            body="Velvet menace. Center of gravity. She does not enter the room. The room adjusts."
            buttonLabel="EXPLORE NOVA"
            imageSrc="/images/nova-card.png"
            align="left"
            backgroundPosition="5% center"
          />

          <TransmissionCard
            eyebrow="LATEST TRANSMISSION"
            title="LOW GRAVITY PROBLEMS"
            body="Some people move on. Others keep orbiting."
            primaryLabel="WATCH"
            secondaryLabel="STREAM"
            tertiaryLabel="JOIN TRANSMISSION"
            backgroundSrc="/images/transmission-card-bg.png"
          />

          <CharacterCard
            title="ORBIT THE ORACLE"
            subtitle="Romantic ruin."
            body="Glorious overreaction. Titling every heartbreak like a prophecy. He moved on. In a poem."
            buttonLabel="ENTER ORBIT"
            imageSrc="/images/orbit-card.png"
            align="right"
            backgroundPosition="100% center"
          />
        </div>
      </div>
    </section>
  );
}
