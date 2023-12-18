"use client";

import React, { useRef, useState, CSSProperties } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type CustomCSSProperties = {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
};

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleSetThumb = (e: any) => setThumbsSwiper(e);

  const customStyles: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
  };

  return (
    <div className="flex gap-2">
      <Swiper
        onSwiper={handleSetThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="flex flex-col product_swiper"
      >
        <SwiperSlide className="h-fit my-1 cursor-pointer">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://images.uzum.uz/clnh1unn7c6gg9idrbr0/original.jpg"
              alt="Imag"
              width={100}
              height={100}
              className="rounded-lg max-w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-fit my-1 cursor-pointer">
          <div className="rounded-lg overflow-hidden ">
            <Image
              src="https://images.uzum.uz/cjcc0r4vutv7iatat900/original.jpg"
              alt="Imag"
              width={100}
              height={100}
              className="rounded-lg max-w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      <Swiper
        style={customStyles as CSSProperties}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full flex "
      >
        <SwiperSlide>
          <div className="py-1 rounded-lg">
            <Image
              src="https://images.uzum.uz/clnh1unn7c6gg9idrbr0/original.jpg"
              alt="Imag"
              width={400}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-1 rounded-lg">
            <Image
              src="https://images.uzum.uz/cjcc0r4vutv7iatat900/original.jpg"
              alt="Imag"
              width={400}
              height={400}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
