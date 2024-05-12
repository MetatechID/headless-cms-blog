import React from "react";
import Card from "@/components/Card";
import config from "@/config";
import SectionHeading from "../SectionHeading";
import { TabsLayout } from "../TabsLayout";

const Program = ({ items }) => {
  return (
    <section
      id="program"
      className="container bg-[url(/triangle-top-right.svg)] text-center sm:mb-40"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <SectionHeading>
        <span className="text-primaryBlueColor text-we">Rama</span> punya
        Program
      </SectionHeading>
      <TabsLayout />
    </section>
  );
};

export default Program;
