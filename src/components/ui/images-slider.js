"use client";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "right",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
        setLoading(false);
      })
      .catch((error) => console.error("Failed to load images", error));
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval = 0;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, []);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
        // ease: "easeIn",
      },
    },
    leftExit: {
      opacity: 1,
      x: "-150%",
      transition: {
        duration: 1,
      },
    },
    rightExit: {
      opacity: 1,
      x: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <>
      <div
        className={cn(
          "relative mx-auto mb-5 flex items-center justify-center overflow-hidden bg-blend-color sm:mt-32 sm:w-[54.5rem]",
          className,
        )}
        style={{
          perspective: "1000px",
        }}
      >
        {areImagesLoaded && children}
        {areImagesLoaded && overlay && (
          <div
            className={cn(
              "absolute inset-0 z-40 bg-black/60",
              overlayClassName,
            )}
          />
        )}

        {areImagesLoaded && (
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate="visible"
              exit={direction === "right" ? "rightExit" : "leftExit"}
              variants={slideVariants}
              className="image absolute inset-0 aspect-square h-auto w-full object-contain sm:object-top"
              alt="rama-banner"
            />
          </AnimatePresence>
        )}
      </div>
      <DotButton
        imgs={loadedImages}
        imgIndex={currentIndex}
        setImgIndex={setCurrentIndex}
      />
    </>
  );
};

export const DotButton = ({ imgs, imgIndex, setImgIndex }) => {
  return (
    <div className="m-4 mx-auto flex w-max justify-center gap-2 rounded-full bg-black/30 px-3 py-2 sm:m-10 sm:-mt-[2.8125rem] sm:justify-start">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${idx === imgIndex ? "bg-[#D81D09]" : "bg-systemGrey"}`}
          />
        );
      })}
    </div>
  );
};
