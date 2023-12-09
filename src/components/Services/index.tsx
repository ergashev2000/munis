import Image from "next/image";
import React from "react";

import Icon from "@/assests/icons/installment-2.c1acd6f.svg";

const index = () => {
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold text-center pb-5">
        Telefonlar va maishiy texnika muddatli to&apos;lovga
      </h3>

      <div className="flex-center gap-5">
        <div className="flex-center flex-col text-center max-w-xs border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1">
          <Image src={Icon} alt="Icon" width={50} height={50} className="" />
          <h4 className="text-lg font-semibold">Bepul yetkazib berish</h4>
          <p className="text-[16px]">
            Texnomartga tovarlarni yetkazib berish shartlari
          </p>
        </div>
        <div className="flex-center flex-col text-center max-w-xs border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1">
          <Image src={Icon} alt="Icon" width={50} height={50} className="" />
          <h4 className="text-lg font-semibold">Bepul yetkazib berish</h4>
          <p className="text-[16px]">
            Texnomartga tovarlarni yetkazib berish shartlari
          </p>
        </div>
        <div className="flex-center flex-col text-center max-w-xs border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1">
          <Image src={Icon} alt="Icon" width={50} height={50} className="" />
          <h4 className="text-lg font-semibold">Bepul yetkazib berish</h4>
          <p className="text-[16px]">
            Texnomartga tovarlarni yetkazib berish shartlari
          </p>
        </div>
        <div className="flex-center flex-col text-center max-w-xs border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1">
          <Image src={Icon} alt="Icon" width={50} height={50} className="" />
          <h4 className="text-lg font-semibold">Bepul yetkazib berish</h4>
          <p className="text-[16px]">
            Texnomartga tovarlarni yetkazib berish shartlari
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
