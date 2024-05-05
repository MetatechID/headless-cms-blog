import AccordionImage from "@/components/AccordionImage";
import Card from "@/components/Card";
import SectionDivider from "@/components/SectionDivider";
import { ImageBanner } from "@/lib/data";
import config from "@/config";
import Image from "next/image";
import About from "@/components/page-sections/About";
import Program from "@/components/page-sections/Program";
import MainBanner from "@/components/page-sections/MainBanner";
import Achievement from "@/components/page-sections/Achievement";

const reqOptions = {
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

const fetchCard = async () => {
  const req = await fetch(`${config.api}/api/programs?populate=*`, reqOptions);
  const res = await req.json();

  return res;
};

const fetchBanner = async () => {
  const req = await fetch(
    `${config.api}/api/main-banner?populate=*`,
    reqOptions
  );
  const res = await req.json();
  return res;
};

const Home = async () => {
  const cardsData = await fetchCard();
  const imagesMainBanner = await fetchBanner();

  return (
    <main className="container flex flex-col items-center">
      <MainBanner items={imagesMainBanner} />
      <SectionDivider />
      <About />
      <Program items={cardsData} />
      <Achievement />
    </main>
  );
};

export default Home;
