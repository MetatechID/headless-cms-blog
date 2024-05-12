import React from "react";

export const MenuData = [
  {
    name: "Home",
    href: "#home",
    // subMenu: [
    //   { name: "Web Development", href: "/web" },
    //   { name: "Interface Design", href: "/interface" },
    //   { name: "Branding", href: "/branding" },
    // ],
  },
  {
    name: "Siapa Rama ?",
    href: "#profile",
    subMenu: [
      { name: "Hobby", href: "/hobby" },
      { name: "Individual", href: "/individual" },
      { name: "Team", href: "/team" },
      {
        name: "Enterprise",
        href: "/enterprise",
      },
    ],
  },
  {
    name: "Pencapaian",
    href: "#Achievement",
    // subMenu: [
    //   { name: "Web Development", href: "/web" },
    //   { name: "Interface Design", href: "/interface" },
    //   { name: "Branding", href: "/branding" },
    // ],
  },
  {
    name: "Rencana",
    href: "#project",
    isDetail: true,
    subMenu: [
      {
        title: "Algochurn",
        href: "https://algochurn.com",
        src: "/WFH.png",
        description: "Prepare for tech interviews like never before.",
      },
    ],
  },
  {
    name: "Program Kerja",
    href: "#programKerja",
  },
  {
    name: "Hubungi Kami",
    href: "hubungiKami",
  },
];

export const ImageBanner = ["/banner1.png", "/banner2.png", "/banner3.png"];
