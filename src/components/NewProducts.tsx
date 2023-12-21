import React, { Fragment } from "react";
import CustomSwiper from "./CustomSwiper";

import MainCard from "./MainCard";
import { productsdata } from "../../data";

export default function NewProducts() {

  console.log(productsdata);
  
  return (
    <section>
      <div className="pb-10">
        <h3 className="text-lg font-semibold">Yangi mahsulotlar</h3>
        <CustomSwiper slidesNumber={5} between={20}>
          {productsdata &&
            productsdata.map(item => <MainCard key={item.id} item={item} />)}
        </CustomSwiper>
      </div>
    </section>
  );
};