export const dynamic = "force-dynamic";
import React, { Suspense } from "react";
import SectionDivider from "@/components/SectionDivider";
// import { ImageBanner } from "@/lib/data";

// import Image from "next/image";
import About from "@/components/page-sections/About";
import Program from "@/components/page-sections/Program";
import MainBanner from "@/components/page-sections/MainBanner";
import Achievement from "@/components/page-sections/Achievement";
import { fetchBanner, fetchCard } from "@/utils/fetcher";

const Home = async () => {
  const cardsData = await fetchCard();
  const imagesMainBanner = await fetchBanner();

  return (
    <main className="container flex flex-col items-center">
      <Suspense fallback={<>Loading...</>}>
        <MainBanner items={imagesMainBanner} />
        <SectionDivider />
        <About />
        <Program items={cardsData} />
        <Achievement />
      </Suspense>
    </main>
  );
};

export default Home;
