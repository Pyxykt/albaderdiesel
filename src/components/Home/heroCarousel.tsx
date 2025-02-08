"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const data = [
    {
      src: "/carousel/1.jpeg",
      alt: "Image 1",
      title: "We are AL Bader Diesel Trading LLC",
      subtitle: "Adding Exploration and boosting production",
    },
    {
      src: "/carousel/2.jpeg",
      alt: "Technology",
      subtitle: "Differting our performance",
      title: "Technology",
    },
    {
      src: "/carousel/3.jpg",
      alt: "Image 3",
      title: "Exploration & production",
      subtitle: "Were meeting the worlds growing demand for energy",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {/* Background Image and title in middle */}
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Card
              className="rounded-none border-0 bg-cover bg-center h-[800px] text-primary-foreground text-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.src})`,
              }}
            >
              {/* add animation they are coming from right */}
              <CardContent className="h-full flex flex-col items-center justify-center gap-8 animate-translate-x">
                <h1>{item.title}</h1>
                <div className="border w-[100px] h-[2px] bg-cyan-800 m-0" />
                <h2 className="text-2xl lg:text-4xl font-semibold">
                  {item.subtitle}
                </h2>
                <Button>Learn More</Button>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
