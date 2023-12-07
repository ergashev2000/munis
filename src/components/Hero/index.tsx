"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";

import Card from "../Card";

const index = () => {
  const data = [
    {
      id: 1,
      name: "islom1",
      img: "https://firebasestorage.googleapis.com/v0/b/kinomen-d3f05.appspot.com/o/media%2Fbanner.webp?alt=media&token=2018d6b4-5f00-4524-b84f-618c3db72feb",
    },
    {
      id: 2,
      name: "islom1",
      img: "https://firebasestorage.googleapis.com/v0/b/kinomen-d3f05.appspot.com/o/media%2F9I3A4F0fqgQeEWZLhqrSUyMXqZhfY0ABAEcake8N.webp?alt=media&token=479b291e-4939-4fb0-bf5a-f7a85ec72f3e",
    },
  ];

  return (
    <div>
      <Swiper
        modules={[
          Autoplay,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
        ]}
        slidesPerView={1}
        spaceBetween={10}
        effect="fade"
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
      >
        {data?.map((item: any) => (
          <SwiperSlide key={item.id}>
            <div
              className="h-[340px] bg-cover bg-center rounded w-full bg-red-500 bg-no-repeat"
              style={{ backgroundImage: `url(${item?.img})` }}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};

export default index;
