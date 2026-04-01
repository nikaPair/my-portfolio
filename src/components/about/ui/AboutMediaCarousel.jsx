"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SLIDE_MEDIA } from "../model/constants";
import styles from "../About.module.css";

export default function AboutMediaCarousel({ t }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const activeSlide = SLIDE_MEDIA[activeSlideIndex];
  const slideAlt = t(`slides.${activeSlideIndex}.alt`);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsVideoPlaying(false);
  }, [activeSlideIndex]);

  const handleVideoStart = async () => {
    if (!videoRef.current) return;
    await videoRef.current.play();
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    if (!videoRef.current || videoRef.current.paused) return;
    videoRef.current.pause();
    setIsVideoPlaying(false);
  };

  return (
    <div className={styles.profileColumn}>
      <div className={styles.photo}>
        {activeSlide.mediaType === "video" ? (
          <>
            <video
              ref={videoRef}
              className={styles.photoVideo}
              src={activeSlide.mediaSrc}
              loop
              playsInline
              preload="metadata"
              aria-label={slideAlt}
              onClick={handleVideoPause}
            />
            {!isVideoPlaying && (
              <button
                type="button"
                className={styles.videoPlayButton}
                onClick={handleVideoStart}
                aria-label={t("playVideo")}
              >
                <Image
                  src="/images/about/Polygon 3.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.videoPlayIcon}
                />
              </button>
            )}
          </>
        ) : (
          <Image
            src={activeSlide.mediaSrc}
            alt={slideAlt}
            fill
            className={styles.photoImage}
            sizes="300px"
            priority
          />
        )}
      </div>
      <div className={styles.reactions}>
        {SLIDE_MEDIA.map((slide, index) => {
          const isActive = index === activeSlideIndex;
          const reactionAlt = t(`slides.${index}.alt`);

          return (
            <button
              key={slide.mediaSrc}
              type="button"
              onClick={() => setActiveSlideIndex(index)}
              className={`${styles.reactionChip} ${isActive ? styles.reactionChipActive : ""}`}
              aria-label={t("showSlide", { name: reactionAlt })}
            >
              {slide.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}
