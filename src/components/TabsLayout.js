"use client";
import { Tabs } from "@/components/ui/tabs";

export function TabsLayout({ itemTabs }) {
  return (
    <div className="relative mx-auto my-10 flex h-screen w-full max-w-6xl flex-col items-start justify-start  [perspective:1000px] sm:flex-row md:h-[40rem]">
      <Tabs tabs={itemTabs} />
    </div>
  );
}
