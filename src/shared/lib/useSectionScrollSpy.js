"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ACTIVATION_OFFSET = 120;

export default function useSectionScrollSpy(
  sections,
  scrollRootSelector = '[data-scroll-root="main"]',
) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");
  const clickTargetRef = useRef("");

  useEffect(() => {
    const scrollRoot = document.querySelector(scrollRootSelector);
    const sectionMap = sections.map((s) => ({
      id: s.id,
      node: document.getElementById(s.id),
    }));

    if (!sectionMap.some((entry) => entry.node)) {
      return undefined;
    }

    const resolveActiveByScroll = () => {
      if (!scrollRoot) {
        return sectionMap.find((e) => e.node)?.id ?? "";
      }

      const scrollTopWithOffset = scrollRoot.scrollTop + ACTIVATION_OFFSET;
      const positioned = sectionMap
        .filter((e) => e.node)
        .map((e) => ({ id: e.id, top: e.node.offsetTop }))
        .sort((a, b) => a.top - b.top);

      let result = positioned[0]?.id ?? "";
      for (const s of positioned) {
        if (s.top <= scrollTopWithOffset) {
          result = s.id;
        }
      }
      return result;
    };

    const sync = () => {
      const next = resolveActiveByScroll();
      if (!next) return;

      const clickTarget = clickTargetRef.current;
      if (clickTarget && clickTarget !== next) {
        setActiveSection((prev) => (prev === clickTarget ? prev : clickTarget));
        return;
      }

      if (clickTarget && clickTarget === next) {
        clickTargetRef.current = "";
      }

      setActiveSection((prev) => (prev === next ? prev : next));
    };

    sync();
    scrollRoot?.addEventListener("scroll", sync, { passive: true });

    return () => {
      scrollRoot?.removeEventListener("scroll", sync);
    };
  }, [sections, scrollRootSelector]);

  const scrollToSection = useCallback((sectionId) => {
    const node = document.getElementById(sectionId);
    if (!node) return;

    node.scrollIntoView({ behavior: "smooth", block: "start" });
    clickTargetRef.current = sectionId;
    setActiveSection(sectionId);
  }, []);

  return { activeSection, scrollToSection };
}
