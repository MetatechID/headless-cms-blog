import React from "react";
import SectionHeading from "../SectionHeading";
import Card from "../Card";
import config from "@/config";
import CardProfile from "@/components/CardProfile";
import { UserCard } from "@/components/UserCard";

const Testimony = ({ items = null }) => {
  const projects =
    items !== null
      ? items.data.map((item, idx) => {
          return {
            name: item.attributes.name,
            tag: item.attributes.tag,
            message: item.attributes.message,
            src: `${config.api}${item.attributes.image.data.attributes.url}`,
          };
        })
      : [];
  return (
    <section
      id="testimony"
      className="container mb-28 mt-20 scroll-mt-28 bg-local text-center leading-8 sm:mb-40"
    >
      <SectionHeading>
        Kata orang, <span className="text-primaryBlueColor">Rama</span> itu...
        <br />
        <p className="text-base font-normal">Kata - kata sahabat rama</p>
      </SectionHeading>
      <UserCard className={"sm:mx-28"} items={projects} />
    </section>
  );
};

export default Testimony;
