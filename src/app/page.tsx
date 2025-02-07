import Contact from "@/components/Home/contact";
import { HeroCarousel } from "@/components/Home/heroCarousel";
import OverView from "@/components/Home/overView";
import Services from "@/components/Home/services";
import WhatWeDo from "@/components/Home/whatWeDo";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <OverView />
      <Services />
      <WhatWeDo />
      <Contact />
    </>
  );
}
