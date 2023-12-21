import React from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import MainCard from "./MainCard";
import CustomSwiper from "./CustomSwiper";
import { productsdata } from "../../data";

const index = () => {
  return (
    <section>
      <div className="pb-6">
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

        <CustomSwiper slidesNumber={5} between={10}>
          {productsdata.reverse().map(item => (
            <MainCard key={item.id} item={item} />
          ))}
        </CustomSwiper>
      </div>

      <div className="pb-6">
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

        <CustomSwiper slidesNumber={5} between={10}>
          {productsdata.reverse().map(item => (
            <MainCard key={item.id} item={item} />
          ))}
        </CustomSwiper>
      </div>
    </section>
  );
};

export default index;
