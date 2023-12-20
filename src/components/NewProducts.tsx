import React from "react";
import CustomSwiper from "./CustomSwiper";

import MainCard from "./MainCard";

export default function NewProducts() {
  return (
    <section>
      <div className="pb-10">
        <h3 className="text-lg font-semibold">Yangi mahsulotlar</h3>
        <CustomSwiper slidesNumber={5} between={20}>
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
          <MainCard />
        </CustomSwiper>
      </div>
    </section>
  );
};