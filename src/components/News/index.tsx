import React from "react";
import CustomSwiper from "../CustomSwiper";

import NewsCard from "../NewsCard";

const index = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-red-500">
        Янгиликлар ва блоглар
      </h3>
      <CustomSwiper slidesNumber={4} between={30}>
        <NewsCard />
      </CustomSwiper>
    </div>
  );
};

export default index;
