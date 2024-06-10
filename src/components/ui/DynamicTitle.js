// components/DynamicTitle.js
import React from "react";

const colors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
];

const DynamicTitle = ({ title }) => {
  const words = title.split(" ");

  return (
    <h1 className="text-3xl font-bold">
      {words.map((word, index) => (
        <span
          key={index}
          className={`${word.toUpperCase() === "RAMA" ? "text-primaryBlueColor" : "text-black"}`}
        >
          {word}{" "}
        </span>
      ))}
    </h1>
  );
};

export default DynamicTitle;
