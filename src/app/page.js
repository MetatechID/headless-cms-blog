export const dynamic = "force-dynamic";
import React, { Suspense } from "react";
// import { ImageBanner } from "@/lib/data";

// import Image from "next/image";
import About from "@/components/page-sections/About";
import Program from "@/components/page-sections/Program";
import MainBanner from "@/components/page-sections/MainBanner";
import Achievement from "@/components/page-sections/Achievement";
import { fetchBanner, fetchCard, fetchData } from "@/utils/fetcher";
import { BannerScroll } from "@/components/BannerScroll";
import Rencana from "@/components/page-sections/Rencana";
import Testimony from "@/components/page-sections/Testimony";

const Home = async () => {
  const cardsData = await fetchCard();
  const imagesMainBanner = await fetchBanner();
  const profile = await fetchData("/api/profile?populate=*");
  const achievement = await fetchData("/api/achievements?populate=*");
  const plan = await fetchData(
    "/api/plan?populate[leftContent][populate]=icon&populate[rightContent][populate]=icon&populate=mediaContent",
  );
  const testimonies = await fetchData("/api/testimonies?populate=*");

  return (
    <main className="container flex flex-col items-center">
      <Suspense fallback={<>Loading...</>}>
        <BannerScroll items={imagesMainBanner} />
        {/* <MainBanner items={imagesMainBanner} /> */}
        {/* <SectionDivider /> */}
        <About items={profile} />
        <Achievement items={achievement} />
        <Rencana items={plan} />
        <Program items={cardsData} />
        <Testimony items={testimonies} />
      </Suspense>
    </main>
  );
};

export default Home;
