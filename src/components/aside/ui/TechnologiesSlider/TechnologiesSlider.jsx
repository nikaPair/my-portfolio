import Image from "next/image";
import styles from "./TechnologiesSlider.module.css";

export default function TechnologiesSlider({ technologies, ariaLabel }) {
  const doubledTechnologies = [...technologies, ...technologies];
  const sliderTrackItems = [...doubledTechnologies, ...doubledTechnologies];
  const singleSetWidth = doubledTechnologies.length * (44 + 8);

  return (
    <div
      className={styles.slider}
      aria-label={ariaLabel}
      style={{
        "--scroll-distance": `${singleSetWidth}px`,
        "--scroll-duration": "56s",
      }}
    >
      <div className={styles.slideTrack}>
        {sliderTrackItems.map((tech, index) => (
          <div
            key={`${tech.id}-${index}`}
            className={styles.slide}
            style={{ backgroundColor: tech.bg }}
          >
            <Image src={tech.src} alt={tech.id} width={44} height={44} />
          </div>
        ))}
      </div>
    </div>
  );
}
