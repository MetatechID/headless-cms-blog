import React from "react";
import Card from "@/components/Card";
import config from "@/config";
import SectionHeading from "../SectionHeading";
import { TabsLayout } from "../TabsLayout";

const Program = ({ items = null }) => {
  let conentTabs = items !== null ? items.data : [];
  return (
    <section
      id="program"
      className="container mb-10 bg-[url(/triangle-top-right.svg)] text-center sm:mb-40"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <SectionHeading>
        <span className="text-primaryBlueColor">Rama</span> punya Program
      </SectionHeading>
      <TabsLayout itemTabs={conentTabs} />
    </section>
  );
};

export default Program;
