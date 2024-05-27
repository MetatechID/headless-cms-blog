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
    name: "Tentang Rama",
    href: "#tentangRama",
  },
  {
    name: "Pencapaian",
    href: "#achievement",
  },
  {
    name: "Rencana",
    href: "#rencana",
  },
  {
    name: "Program Kerja",
    href: "#program",
  },
  {
    name: (
      <button className="flex flex-row gap-1 rounded-lg bg-white p-3 text-black">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"
            fill="#2B398D"
          />
        </svg>
        {"Hubungi Kami"}
      </button>
    ),
    href: "http://bit.ly/jayaberanimaju",
    openNewTab: true,
  },
];

export const ImageBanner = ["/banner1.png", "/banner2.png", "/banner3.png"];
