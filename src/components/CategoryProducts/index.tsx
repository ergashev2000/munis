"use client";

import React from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import Card from "../Card";

const index = () => {
  return (
    <div>
      <div className="py-10">
        <Link href={"/"}>
          <div className="flex-y-center group w-max">
            <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-red-500">
              Telefonlar
            </h3>
            <span className="transition-all duration-300 group-hover:pl-2">
              <ArrowRightIcon color={"#000"} />
            </span>
          </div>
        </Link>
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
    </div>
  );
};

export default index;
