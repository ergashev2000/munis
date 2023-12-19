"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import {
  NewProducts,
  ProductSwiper,
  SelectMonth,
  TabAboutProduct,
} from "@/components";

import { Button } from "@/components/index";
import { useParams } from "next/navigation";

export default function Page() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  console.log(productData);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        console.log(response);
        
        const data = await response.json();
        console.log(data);
        
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto min-h-screen pb-4">
      <div className="pb-7 pt-5 [&>svg]:stroke-black text-sm flex-y-center gap-2 text-gray-400 [&>*:last-child]:text-black">
        <Link href={"/"}>
          <h4>Bosh sahifa</h4>
        </Link>
        <ArrowRightIcon />
        <Link href={"/"}>
          <h4>Kir moshina</h4>
        </Link>
      </div>

      <div className="flex gap-4">
        <div className="bg-white p-8 rounded-lg w-3/4 h-full">
          <h4 className="pb-4 pt-2 px-1.5 text-xl font-semibold">
            LG F2M5HS6W kir yuvish mashinasi
          </h4>
          <div className="flex gap-8">
            <div className="w-1/2">
              <ProductSwiper />
            </div>
            <div className="w-1/2 space-y-2">
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
        <div className="w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-lg h-max space-y-2">
            <h4 className="text-lg font-semibold">Mahsulot narxi</h4>
            <p className="text-2xl text-red-500 font-semibold">
              1 425 000 so`m
            </p>
            <Button outline={false} classname="">
              Savatchaga qo`shish
            </Button>
            <Button outline classname="text-white">
              Sotib olish
            </Button>
          </div>

          <div className="bg-white rounded-lg h-max p-4 font-semibold text-lg">
            <h4>Muddatli to`lovga</h4>
            <SelectMonth />
          </div>
        </div>
      </div>

      <TabAboutProduct />

      <NewProducts />
    </div>
  );
}
