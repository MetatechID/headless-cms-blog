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
                    }}
                  >
                    {console.log(item.attributes.media.data.attributes)}
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
                  <h2 className="pb-5 text-black">{item.attributes.title}</h2>
                  <Link href={item.attributes.link}>
                    <button className="rounded-lg border border-primaryBlueColor p-2 text-primaryBlueColor hover:opacity-70 ">
                      Nonton Video
                    </button>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default VideoLayout;
