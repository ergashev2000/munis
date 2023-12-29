"use client";

import React from "react";
import Image from "next/image";

import CustomSwiper from "./CustomSwiper";

import CategoryIcon from "@/assests/icons/category.webp";
import Link from "next/link";
import { useParams } from "next/navigation";

import Icon1 from "../assests/icons/17e6cca8-ba51-490a-832a-e13d432640d2.svg";
import Icon2 from "../assests/icons/365fda66-9e5f-44ac-88ea-f25fc90dc9d1.svg";
import Icon3 from "../assests/icons/888ea4a7-55dc-4da3-b83d-f34a44c25e3c.svg";

const categoryPath = [
  {
    id: 1,
    category: `Telvezirlar`,
    img: Icon1,
  },
  {
    id: 2,
    category: "XAVO SOVUTGICHLAR",
    img: Icon2,
  },
  {
    id: 3,
    category: "SMARTFONLAR",
    img: Icon3,
  },
  {
    id: 4,
    category: "MUZLATGICHLAR",
    img: Icon1,
  },
  {
    id: 5,
    category: "CHANGYUTGICHLAR",
    img: Icon2,
  },
  {
    id: 6,
    category: "NOUTBUKLAR",
    img: Icon3
  },
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
