import { getTranslations } from "next-intl/server";
import { Projects } from "@/components/projects";
import { Aside, AsideFooter } from "@/components/aside";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { ContactSection } from "@/components/contact";
import styles from "./page.module.css";

export default async function Home({ params }) {
  const { locale } = await params;
  const tFooter = await getTranslations({ locale, namespace: "footer" });

  return (
    <div className={styles.container}>
      <Aside locale={locale} />
      <main className={styles.main} data-scroll-root="main">
        <section id="projects" className={`${styles.section} ${styles.transparentSection}`}>
          <Projects />
        </section>
        <section id="about" className={`${styles.section} ${styles.transparentSection}`}>
          <About />
        </section>
        <section id="experience" className={`${styles.section} ${styles.transparentSection}`}>
          <Experience />
        </section>
        <ContactSection locale={locale} />
        <div className={styles.mainFooter}>
          <AsideFooter linkedinAriaLabel={tFooter("linkedinLabel")} />
        </div>
      </main>
    </div>
  );
}
