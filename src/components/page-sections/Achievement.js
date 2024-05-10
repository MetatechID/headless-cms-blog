"use client";
import React, { Fragment } from "react";
import SectionHeading from "../SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IconMedal } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";

const Achievement = ({ items }) => {
  return (
    <section
      id="achievement"
      className="container min-h-[42.75rem] text-center sm:mb-40"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <VerticalTimeline animate={true} lineColor="">
        {items !== null ? (
          items.data.map((item, idx) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
            });
            return (
              <div
                key={`achievement-${idx}`}
                ref={ref}
                className="vertical-timeline-element"
              >
                <VerticalTimelineElement
                  contentStyle={{
                    backgroundColor: "rgba(89, 90, 95, 0.5)",
                    boxShadow: "none",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                    color: "black",
                  }}
                  contentArrowStyle={{
                    borderRight: "0.4rem solid rgba(89, 90, 95, 0.5)",
                  }}
                  visible={inView}
                  icon={<IconMedal stroke={2} />}
                  iconStyle={{
                    background: "#fff",
                    color: "black",
                    fontSize: "1.5rem",
                  }}
                  date={item.attributes.year}
                >
                  <h3 className="font-semibold capitalize">
                    {item.attributes.title}
                  </h3>
                  <p className="!mt-0 font-normal">
                    {item.attributes.location}
                  </p>
                  <p className="!mt-1 !font-normal">
                    {item.attributes.summary}
                  </p>
                </VerticalTimelineElement>
              </div>
            );
          })
        ) : (
          <div>not found</div>
        )}
      </VerticalTimeline>
    </section>
  );
};

export default Achievement;
