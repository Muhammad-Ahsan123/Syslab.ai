// 'use client'

// import Image from "next/image";
// import Header from "./Compons/Header";
// import MainBanner from "./Compons/MainBanner";
// import Section2 from "./Compons/Section2";
// import ServiceSection from "./Compons/ServiceSection";

// export default function Home() {
//   return (
//     <>
//       <Header />
//       <MainBanner />
//       <Section2 />
//       <ServiceSection />
//     </>
//   );
// }


import React from 'react'
import { NavbarSimple } from './Compons/Header';
import { cn } from "@/lib/utils";
import Marquee from "../components/ui/marquee";
import { AnimatedBeamDemo } from '../app/Compons/animated-beam'
import { TabsDemo } from './Compons/tabDemo';
import MainBanner from './Compons/MainBanner';
import Footer from './Compons/Footer';
// import {images} from '../../public/Aprendizagem.png'
function page() {
  const images = {
    a: "/fastone.png", // Referencing the image relative to the public folder
    b: "/googledev9.png", // Same here
    c: "/hec2.png", // Same here
    d: "/ncai3.png", // Same here
    e: "/nic4.png", // Same here
    f: "/nividia6.png", // Same here
    g: "/pasha7.png", // Same here
    h: "/pif8.png", // Same here
    i: "/shamsipng5.png", // Same here
  };
  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: images.a,
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: images.b,
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.c,
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.d,
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.e,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.f,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.g,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.h,
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: images.i,
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);


  return (
    <>
      <NavbarSimple />
      <MainBanner />
      <AnimatedBeamDemo />
      <TabsDemo />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        {/* <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee> */}
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
      <Footer />
    </>
  )
}

export default page


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
