"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, A11y } from "swiper/modules";

import Card from "../Card";

const index = () => {
  return (
    <div className="pb-10">
      <h3 className="text-lg font-semibold">Yangi mahsulotlar</h3>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={5}
        spaceBetween={20}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
      >
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>{" "}
        <SwiperSlide className="py-5">
          <Card />
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default index;
