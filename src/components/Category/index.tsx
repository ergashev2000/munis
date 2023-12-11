'use client'

import React from "react";
import Image from "next/image";


import CustomSwiper from "../CustomSwiper";

import CategoryIcon from "@/assests/icons/category.webp";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const Index = () => {
  const { locale } = useParams();
  
  return (
    <section className="py-10">
      <h3 className="text-lg font-semibold">Ommabop kategoriyalar</h3>

      <CustomSwiper slidesNumber={5} between={10}>
        <Link href={`${locale}/category/smartfon`}>
          <div className="flex-y-center gap-5 rounded-xl max-w-[300px] shadow-[0_2px_24px_rgba(0,0,0,0.06)] border bg-white border-white py-4 cursor-pointer px-5">
            <Image src={CategoryIcon} alt="sa" width={50} height={50} />
            <h5>Noutbuklar</h5>
          </div>
        </Link>
      </CustomSwiper>
    </section>
  );
};

export default Index;
