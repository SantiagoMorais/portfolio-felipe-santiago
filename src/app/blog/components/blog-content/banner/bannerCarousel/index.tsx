"use client";

// Importe os estilos necessários
import "swiper/css";
import "swiper/css/autoplay";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { bannerCarouselSlides } from "@/utils/banner-caroulsel-slides";

export const BannerCarousel = () => (
  <section className="absolute top-0 left-0 flex size-full items-center overflow-hidden rounded-lg">
    <Swiper
      className="border-secondary shadow-allAround shadow-secondary size-full rounded-lg border-2 border-t-2"
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      allowTouchMove={false}
    >
      <div className="absolute top-0 left-0 z-10 size-full bg-black/60" />
      {bannerCarouselSlides.map((slide) => (
        <SwiperSlide key={slide.src}>
          <div className="relative h-80 w-full">
            <Image
              src={slide}
              alt="Imagem blog"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
