"use client";

import React from "react";
import Image from "next/image";

import CustomSwiper from "./CustomSwiper";

import CategoryIcon from "@/assests/icons/category.webp";
import Link from "next/link";
import { useParams } from "next/navigation";


const categoryPath = [
  {
    id: 1,
    category: `AKSIYALAR`,
    img: "https://mini-io-api.texnomart.uz/catalog/special-category/9/022df0cb-6560-4735-af2b-925057321911.svg",
  },
  {
    id: 2,
    category: "XAVO SOVUTGICHLAR",
    img: "https://mini-io-api.texnomart.uz/catalog/special-category/4/08aa7c9c-6fc4-4dd9-af79-669803f79f9a.svg",
  },
  {
    id: 3,
    category: "SMARTFONLAR",
    img: "https://mini-io-api.texnomart.uz/catalog/special-category/5/aea82075-5f5c-45fa-bac8-ad86b97bfe27.svg",
  },
  {
    id: 4,
    category: "MUZLATGICHLAR",
    img: "https://mini-io-api.texnomart.uz/catalog/special-category/22/4bdb1f78-afd4-4e21-84b8-704678fee731.webp",
  },
  {
    id: 5,
    category: "CHANGYUTGICHLAR",
    img: "https://mini-io-api.texnomart.uz/catalog/special-category/10/0fc51fb8-ba7d-42dc-bf7a-f131ac4f83f9.svg",
  },
  { id: 6, category: "NOUTBUKLAR" },
  { id: 7, category: "TELEVIZORLAR" },
];

const Index = () => {
  const { locale } = useParams();

  return (
    <section className="py-10">
      <h3 className="text-lg font-semibold">Ommabop kategoriyalar</h3>

      <CustomSwiper slidesNumber={5} between={10}>
        {categoryPath.map(item => (
          <Link key={item.id} href={`${locale}/category/smartfon`}>
            <div className="flex-y-center gap-5 rounded-xl max-w-[300px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white py-4 cursor-pointer px-5">
              <Image
                src={
                  item.img ||
                  "https://mini-io-api.texnomart.uz/catalog/special-category/10/0fc51fb8-ba7d-42dc-bf7a-f131ac4f83f9.svg"
                }
                alt="sa"
                width={50}
                height={50}
              />
              <h5 className="uppercase text-sm">{item.category}</h5>
            </div>
          </Link>
        ))}
      </CustomSwiper>
    </section>
  );
};

export default Index;
