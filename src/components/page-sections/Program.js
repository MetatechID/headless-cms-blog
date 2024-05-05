import React from "react";
import Card from "@/components/Card";
import config from "@/config";
import SectionHeading from "../SectionHeading";

const Program = ({ items }) => {
  return (
    <section className="container text-center sm:mb-40">
      <SectionHeading>My Program</SectionHeading>
      <div className="flex flex-wrap">
        {items.data.map((cardData, idx) => {
          return (
            <div key={`card-${idx}`} className="w-1/2">
              <Card
                title={cardData.attributes.title}
                subTitle={cardData.attributes.subTitle}
                summary={cardData.attributes.summary}
                imgSrc={`${config.api}${cardData.attributes.featuredImage.data.attributes.url}`}
                imgAlt={"feature image"}
                href={"#"}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Program;
