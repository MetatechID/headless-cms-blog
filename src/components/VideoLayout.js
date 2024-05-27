import config from "@/config";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const VideoLayout = ({ items }) => {
  return (
    <div className="mx-5 sm:mx-28">
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items !== null
          ? items.data.map((item, idx) => {
              return (
                <div
                  key={`feed-${idx}`}
                  className="flex flex-col justify-between gap-1"
                >
                  <Link href={item.attributes.link} passHref legacyBehavior>
                    <a target="_blank" rel="noreferrer">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          ease: [0, 0.71, 0.2, 1.01],
                          scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                          },
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          src={
                            `${config.api}${item.attributes.media.data.attributes.url}` ||
                            "#"
                          }
                          alt={item.attributes.alt || "video"}
                          className="aspect-video rounded-md"
                          style={{ objectFit: "contain" }}
                        />
                      </motion.div>
                    </a>
                  </Link>
                  <h2 className="pb-5 text-black">{item.attributes.title}</h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default VideoLayout;
