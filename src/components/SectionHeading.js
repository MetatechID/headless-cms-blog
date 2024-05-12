import React from "react";
import { cn } from "@/lib/utils";

const SectionHeading = ({ children, className }) => {
  return (
    <h2
      className={cn(
        className,
        "mb-8 ml-5 text-left text-3xl font-medium capitalize text-[#000000] sm:ml-[7rem]",
      )}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
