"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y } from "swiper/modules";

import CategoryIcon from "@/assests/icons/category.webp";

const index = () => {
  return (
    <div className="py-10">
      <h3 className="text-lg font-semibold">Ommabop kategoriyalar</h3>
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
          <div className="flex-y-center gap-5 rounded-xl max-w-[300px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white py-4 cursor-pointer px-5">
            <Image src={CategoryIcon} alt="sa" width={50} height={50} />
            <h5>Noutbuklar</h5>
          </div>
        </SwiperSlide>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default index;
