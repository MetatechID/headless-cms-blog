export const dynamic = "force-dynamic";
import React, { Suspense } from "react";
import About from "@/components/page-sections/About";
import Program from "@/components/page-sections/Program";
import MainBanner from "@/components/page-sections/MainBanner";
import Achievement from "@/components/page-sections/Achievement";
import {
  fetchBanner,
  fetchCard,
  fetchData,
  fetchIgData,
} from "@/utils/fetcher";
import Rencana from "@/components/page-sections/Rencana";
import Testimony from "@/components/page-sections/Testimony";
import WelcomeMsg from "@/components/WelcomeMsg";
import InstagramFeed from "@/components/page-sections/InstagramFeed";

const Home = async () => {
  const cardsData = await fetchCard();
  const imagesMainBanner = await fetchBanner();
  const profile = await fetchData("/api/profile?populate=*");
  const achievement = await fetchData("/api/achievements?populate=*");
  const plan = await fetchData(
    "/api/plan?populate[leftContent][populate]=icon&populate[rightContent][populate]=icon&populate=mediaContent",
  );
  const testimonies = await fetchData("/api/testimonies?populate=*");
  const igData = await fetchIgData();

  return (
    <main className="container flex flex-col items-center">
      <Suspense fallback={<>Loading...</>}>
        <MainBanner items={imagesMainBanner} />
        <WelcomeMsg />
        {/* <SectionDivider /> */}
        <About items={profile} />
        <Achievement items={achievement} />
        <Rencana items={plan} />
        <Program items={cardsData} />
        <InstagramFeed items={igData} />
        <Testimony items={testimonies} />
      </Suspense>
    </main>
  );
};

export default Home;
