import React from "react";
import CustomSwiper from "../CustomSwiper";

import Card from "../Card";

const index = () => {
  return (
    <section>
      <div className="pb-10">
        <h3 className="text-lg font-semibold">Yangi mahsulotlar</h3>
        <CustomSwiper slidesNumber={5} between={20}>
          <Card />
        </CustomSwiper>
      </div>
    </section>
  );
};

export default index;
