"use client";

import React from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import Card from "./MainCard";

const index = () => {
  return (
    <section>
      <div className="py-10">
        <h3 className="text-lg font-semibold">
          Yaqinda ko`rib chiqilgan mahsulotlar
        </h3>
        <Swiper
          modules={[Navigation, A11y]}
          slidesPerView={5}
          spaceBetween={10}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
        >
          <SwiperSlide className="py-5">
            <Card />
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default index;
