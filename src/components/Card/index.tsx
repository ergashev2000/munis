import { CartIcon, HeartIcon } from "@/assests/icons/svgicons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Img1 from "@/assests/images/img2.jpg";
import Img2 from "@/assests/images/img3.jpg";

const index = () => {
  const linkimg1 = "https://images.uzum.uz/cjh80rbk9fqe2mb6bdt0/original.jpg";
  const linkimg2 = "https://images.uzum.uz/cl6bail6sfhgee0l3uc0/original.jpg";
  return (
    <div className="p-2 rounded-xl bg-white max-w-[300px] relative hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
      <Link href={"/"}>
        <div className="relative w-full max-w-[360px] group overflow-hidden">
          <Image
            width={300}
            height={400}
            src={linkimg1}
            alt="Main Image"
            className="block w-full max-w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
          />
          {linkimg2 && (
            <Image
              width={300}
              height={400}
              src={linkimg2}
              alt="Hover Image"
              className="absolute top-0 right-0 left-0 bottom-0 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"
            />
          )}
        </div>
      </Link>
      <button className="absolute top-3 right-3 rounded-full p-1 hover:bg-black hover:bg-opacity-10 transition-all duration-300">
        <HeartIcon color={"#a6a6a6"} />
      </button>
      <div className="space-y-1.5">
        <Link href={"/"}>
          <h4 className="font-semibold pt-2 text-red-500">1 999 000 so`m</h4>
        </Link>
        <Link
          href={"/"}
          className="text-[16px] font-semibold line-clamp-2 hover:bg-white  hover:text-red-500 transition-all duration-300"
        >
          Smartfon Oppo A17 4/64GB Blue
        </Link>
        <p className="text-[14px] text-opacity-50 ">
          Brend:{" "}
          <Link href={"/"}>
            <span className="text-opacity-90 underline">Xiomi</span>
          </Link>
        </p>
        <div className="flex-y-center gap-2 pt-1">
          <button className="w-[calc(100%-40px)] border border-red-500 rounded-lg bg-red-500 text-white text-[15px] transition-all duration-300 hover:bg-white hover:text-black font-semibold h-11 px-4 hover:border-gray-200">
            Hozirni o`zidayoq xarid qilish
          </button>
          <button className="min-w-[55px] h-11 border border-gray-300 rounded-lg flex-center">
            <CartIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
