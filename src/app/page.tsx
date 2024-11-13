'use client'

import Image from "next/image";
import Header from "./Components/Header";
import MainBanner from "./Components/MainBanner";
import Section2 from "./Components/Section2";
import ServiceSection from "./Components/ServiceSection";

export default function Home() {
  return (
    <>
      <Header />
      <MainBanner />
      <Section2 />
      <ServiceSection />
    </>
  );
}
