import React from "react";

const SectionHeading = ({ children }) => {
  return (
    <h2 className="mb-8 ml-5 text-left text-3xl font-medium capitalize text-[#000000] sm:ml-[7rem]">
      {children}
    </h2>
  );
};

export default SectionHeading;
