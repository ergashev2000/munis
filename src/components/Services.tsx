import Image from "next/image";
import React from "react";

import FreeDelivery from "@/assests/icons/free-delivery.svg";
import Faq from "@/assests/icons/faq.svg";
import Payment from "@/assests/icons/term-payment.svg";
import Warranty from "@/assests/icons/warranty.svg";

const index = () => {
  return (
    <section className="py-12">
      <h3 className="text-xl font-semibold text-center pb-5">
        Telefonlar va maishiy texnika muddatli to&apos;lovga
      </h3>

      <div className="flex-center gap-5">
        <div className="flex items-center flex-col text-center w-1/4 border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1 h-40">
          <Image
            src={Warranty}
            alt="Icon"
            width={50}
            height={50}
            className=""
          />
          <h4 className="text-lg font-semibold">
            Muddatli to&apos;lovga sotib olish
          </h4>
          <p className="text-[16px]">
            Maishiy texnika mahsulotlari uchun qulay onlayn to&apos;lov
          </p>
        </div>
        <div className="flex items-center flex-col text-center w-1/4 border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1 h-40">
          <Image
            src={FreeDelivery}
            alt="Icon"
            width={50}
            height={50}
            className=""
          />
          <h4 className="text-lg font-semibold">Bepul yetkazib berish</h4>
          <p className="text-[16px]">Tovarlarni yetkazib berish shartlari</p>
        </div>
        <div className="flex items-center flex-col text-center w-1/4 border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1 h-40">
          <Image src={Payment} alt="Icon" width={50} height={50} className="" />
          <h4 className="text-lg font-semibold"> Mahsulotlar uchun kafolat</h4>
          <p className="text-[16px]">
            Kafolati va qaytarilishi haqida hamma narsani bilib oling
          </p>
        </div>
        <div className="flex items-center flex-col text-center w-1/4 border border-gray-200 rounded-xl px-4 py-6 bg-white gap-1 h-40">
          <Image src={Faq} alt="Icon" width={50} height={50} className="" />
          <h4 className="text-lg font-semibold">Yordam</h4>
          <p className="text-[16px]">Yordam Ko&apos;p beriladigan savollar</p>
        </div>
      </div>
    </section>
  );
};

export default index;
