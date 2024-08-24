"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function LandingCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnLastSnap: false }));

  const slides = [
    {
      src: "/assets/images/landing-page/slider-2.jpg",
      alt: "",
    },
    {
      src: "/assets/images/landing-page/slider-3.jpg",
      alt: "",
    },
    {
      src: "/assets/images/landing-page/slider-1.jpg",
      alt: "",
    },
  ];

  return (
    <>
      <div className="mt-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <Card className="border-none">
                  <CardContent className="flex justify-center overflow-hidden p-0 relative h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
                    <Image
                      className="rounded-2xl object-cover"
                      src={slide.src}
                      alt={slide.alt}
                      fill
                    ></Image>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
