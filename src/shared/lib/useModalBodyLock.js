"use client";

import { useEffect } from "react";

export default function useModalBodyLock(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const initialOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = initialOverflow;
    };
  }, [isOpen, onClose]);
}
