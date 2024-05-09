import React from "react";
import config from "@/config";

const reqOptions = {
  cache: "no-store",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || "130d0aa6facd9674777b5cae82af7e73c891493e30131c19d43fee61d4ecfda7878aae72736d5fdf5718a9f04c288e73bd8a5d4ccaa8d4c6e5d0d93e5dce8fa160552cd3a9c3cf410abbd03ded609841b99ada52a8b8faf33de08e1f848cde4fd0cfb0aa6fb0fa6f1dc47039f9bdd6f43228b9f5befbc7f5386c93586e904126"}`,
  },
};

export const fetchCard = async () => {
  const req = await fetch(`${config.api}/api/programs?populate=*`, reqOptions);

  if (!req.ok) {
    return null;
  }

  const res = await req.json();

  return res;
};

export const fetchBanner = async () => {
  const req = await fetch(
    `${config.api}/api/main-banner?populate=*`,
    reqOptions,
  );

  if (!req.ok) {
    return null;
  }

  const res = await req.json();
  return res;
};
