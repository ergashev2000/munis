"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y, Autoplay } from "swiper/modules";

import Image from "next/image";

import BrandLogo1 from "@/assests/images/Apple_Inc.-Logo.wine.svg";
import BrandLogo2 from "@/assests/images/Samsung-Logo.wine.svg";

const index = () => {
  return (
    <section>
      <div className="pt-10">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          slidesPerView={6}
          spaceBetween={10}
          loop={true}
          effect={"slide"}
          freeMode={true}
          speed={5000}
          simulateTouch={false}
          autoplay={{
            delay: 1,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            waitForTransition: true,
            stopOnLastSlide: false,
          }}
        >
          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/71/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/73/9f3f6966-5f68-4bd1-a918-21f6f2c68f26.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/74/c53e8986-c05a-4af7-b5a6-adafe1f04bff.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/72/193da322-a1dd-40b6-9b4e-935463d2136f.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/71/db9c48fb-a175-4ff9-ab06-bd953ddc82cd-medium.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/73/9f3f6966-5f68-4bd1-a918-21f6f2c68f26.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5 h-20">
              <div className="w-full h-6 bg-[url(https://mini-io-api.texnomart.uz/catalog/special-brands/74/c53e8986-c05a-4af7-b5a6-adafe1f04bff.webp)] bg-center bg-contain bg-no-repeat" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default index;
