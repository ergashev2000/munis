import React from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import { ProductSwiper } from "@/components";

import { Button } from "@/components/index";

export default function Page() {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="py-4 [&>svg]:stroke-black text-sm flex-y-center gap-2">
        <Link href={"/"}>Bosh sahifa</Link>
        <ArrowRightIcon />
        <Link href={"/"}>Kir moshina</Link>
      </div>

      <div className=" flex gap-4">
        <div className="bg-white p-4 rounded-lg w-3/4 h-full">
          <h4 className="pb-4 pt-2 px-1.5 text-xl font-semibold">
            LG F2M5HS6W kir yuvish mashinasi
          </h4>
          <div className="flex gap-2">
            <div className="w-1/2">
              <ProductSwiper />
            </div>
            <div className="w-1/2 px-6 pl-10 space-y-2">
              <h4 className="font-semibold">Mahsulot haqida qisqacha</h4>
              <p className="text-sm font-semibold">
                Brend: <span className="text-red-500">LG</span>
              </p>
              <ul className="space-y-2 whitespace-nowrap">
                <li className="text-[15px] flex-center w-full">
                  <div>SKU</div>
                  <hr className="w-full mx-2" />
                  <div>121341</div>
                </li>
                <li className="text-[15px] flex-center w-full">
                  <div>Og`irligi, kg</div>
                  <hr className="w-full mx-2" />
                  <div>60 kg</div>
                </li>
                <li className="text-[15px] flex-center w-full">
                  <div>Kir yuvish mashinasining turi</div>
                  <hr className="w-full mx-2" />
                  <div>avtomatik</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-white p-4 rounded-lg h-max space-y-2">
          <h4 className="px-1.5 text-xl font-semibold">
            Mahsulot narxi
          </h4>
          <p className="text-2xl text-red-500 font-semibold">1 425 000 so`m</p>
          <Button outline={false} classname="">
            Savatchaga qo`shish
          </Button>
          <Button outline classname="text-white">
            Sotib olish
          </Button>
        </div>
      </div>
    </div>
  );
}
