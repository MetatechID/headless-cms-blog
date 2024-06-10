import React from "react";
import SectionHeading from "../SectionHeading";
import Card from "../Card";
import config from "@/config";
import CardProfile from "@/components/CardProfile";

const About = ({ items = null }) => {
  return (
    <section
      id="tentangRama"
      className="container mb-28 scroll-mt-28 bg-[url('/triangle-top-left.svg')] bg-local text-center leading-8 sm:mb-40"
      style={{ backgroundRepeat: "no-repeat" }}
    >
      <SectionHeading className="mt-10"></SectionHeading>
      {items !== null && (
        <CardProfile
          title={items.data.attributes.title}
          subTitle={items.data.attributes.tag}
          summary={items.data.attributes.summary}
          imgSrc={`${config.api}${items.data.attributes.image.data.attributes.url}`}
          imgAlt={"rama profile image"}
          isHtml={true}
        />
      )}
    </section>
  );
};

export default About;
