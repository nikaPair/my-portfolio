import { getTranslations } from "next-intl/server";
import styles from "./aside.module.css";
import { navigationSections, technologies } from "./model/constants";
import ProfileHero from "./ui/ProfileHero/ProfileHero";
import ContactActions from "./ui/ContactActions/ContactActions";
import SectionNavigation from "./ui/SectionNavigation/SectionNavigation";
import TechnologiesSlider from "./ui/TechnologiesSlider/TechnologiesSlider";
import LocaleSwitcher from "./ui/LocaleSwitcher/LocaleSwitcher";

export default async function Aside({ locale }) {
  const tNav = await getTranslations({ locale, namespace: "navigation" });
  const tAside = await getTranslations({ locale, namespace: "aside" });

  const sections = navigationSections.map((section) => ({
    id: section.id,
    label: tNav(section.id),
  }));

  return (
    <aside className={styles.aside}>
      <div className={styles.localeRow}>
        <LocaleSwitcher />
      </div>
      <ProfileHero
        sections={sections}
        heroTitle={tAside("heroTitle")}
        heroDescription={tAside("heroDescription")}
        avatarAlt={tAside("avatarAlt")}
      />
      <ContactActions telegramLabel={tAside("telegram")} availableText={tAside("openToOffers")} />

      <div className={styles.bottomPanel} data-node-id="64:1027">
        <div className={styles.desktopNavigation}>
          <SectionNavigation sections={sections} />
        </div>

        <div className={styles.divider} />

        <TechnologiesSlider technologies={technologies} ariaLabel={tAside("technologiesAria")} />
      </div>
    </aside>
  );
}
