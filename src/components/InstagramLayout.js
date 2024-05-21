import { motion } from "framer-motion";
import React from "react";

const Instagramlayout = ({ items }) => {
  return (
    <div className="mx-28">
      <div className="mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {items !== null
          ? items.data.map((item, idx) => {
              return (
                <motion.div
                  key={`feed-${idx}`}
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
                  }}
                >
                  <img
                    src={item["media_url"]}
                    alt={item.caption || "image"}
                    className="aspect-square rounded-md"
                  />
                </motion.div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Instagramlayout;
