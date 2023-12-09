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
          autoplay={{
            delay: 1,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            waitForTransition: true,
            stopOnLastSlide: false,
          }}
        >
          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo2}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo1}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo2}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo1}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo2}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo1}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo2}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide className="py-5">
            <div className="flex-center rounded-lg max-w-[250px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white cursor-pointer px-5">
              <Image
                src={BrandLogo1}
                width={60}
                height={20}
                alt="Brands"
                className="w-full h-16 mix-blend-multiply object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default index;
