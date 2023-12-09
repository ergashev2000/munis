"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import NewsCard from '../NewsCard'

const index = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-red-500">
        Янгиликлар ва блоглар
      </h3>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={4}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
      >
        <SwiperSlide className="py-5">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <NewsCard />
        </SwiperSlide>
        <SwiperSlide className="py-5">
          <NewsCard />
        </SwiperSlide>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default index;
