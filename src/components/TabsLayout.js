"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";
import ProgramContent from "@/components/ProgramContent";

export function TabsLayout() {
  const tabs = [
    {
      title: "#BeraniKolaborasi",
      value: "beraniKolaborasi",
      content: <ProgramContent />,
    },
    {
      title: "#BeraniBicara",
      value: "beraniBicara",
      content: <ProgramContent />,
    },
    {
      title: "#BeraniBerbagi",
      value: "beraniBerbagi",
      content: <ProgramContent />,
    },
    {
      title: "#BeraniTumbuh",
      value: "beraniTumbuh",
      content: <ProgramContent />,
    },
    {
      title: "#BeraniSehat",
      value: "beraniSehat",
      content: <ProgramContent />,
    },
    {
      title: "#KartiniBerani",
      value: "karitiniBerani",
      content: <ProgramContent />,
    },
  ];

  return (
    <div className="b relative mx-auto my-10 flex h-[20rem] w-full max-w-6xl flex-row items-start  justify-start [perspective:1000px] md:h-[40rem]">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="absolute inset-x-0 -bottom-10  mx-auto h-[60%] w-[90%] rounded-xl object-cover object-left-top md:h-[90%]"
    />
  );
};
