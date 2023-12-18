import React from "react";
import Link from "next/link";

import {
  Facebook,
  Instagram,
  Telegram,
  Youtube,
} from "@/assests/icons/svgicons";

import {
  FacebookLink,
  InstagramLink,
  PhoneNumber,
  TelegramLink,
  YoutubeLink,
} from "@/utils/constants/contact";

const index = () => {
  return (
    <footer className="bg-[#333] w-full pt-10 pb-5">
      <div className="container mx-auto ">
        <div className="text-white flex-between">
          <div className="space-y-4 w-1/4">
            <div>
              <p className="text-[14px] pb-2">
                Savolingiz bormi? Qo&apos;ng&apos;iroq qiling
              </p>
              <Link href={`tel:${PhoneNumber.original_number}`}>
                <span className="text-xl font-semibold hover:text-red-500 transition-all duration-300">
                  {PhoneNumber.public_number}
                </span>
              </Link>
            </div>
            <ul className="flex gap-2 items-center">
              <li>
                <Link href={TelegramLink} target="_blank">
                  <div className="w-10 h-10 bg-[hsla(0,0%,85%,.2)] flex-center rounded-md hover:bg-black hover:bg-opacity-20 transition-all duration-300">
                    <Telegram />
                  </div>
                </Link>
              </li>
              <li>
                <Link href={InstagramLink} target="_blank">
                  <div className="w-10 h-10 bg-[hsla(0,0%,85%,.2)] flex-center rounded-md hover:bg-black hover:bg-opacity-20 transition-all duration-300">
                    <Instagram />
                  </div>
                </Link>
              </li>
              <li>
                <Link href={FacebookLink} target="_blank">
                  <div className="w-10 h-10 bg-[hsla(0,0%,85%,.2)] flex-center rounded-md hover:bg-black hover:bg-opacity-20 transition-all duration-300">
                    <Facebook />
                  </div>
                </Link>
              </li>
              <li>
                <Link href={YoutubeLink} target="_blank">
                  <div className="w-10 h-10 bg-[hsla(0,0%,85%,.2)] flex-center rounded-md hover:bg-black hover:bg-opacity-20 transition-all duration-300">
                    <Youtube />
                  </div>
                </Link>
              </li>
            </ul>

            <div className="before:w-full before:h-[1px] before:bottom-0 before:bg-white mt-5 before:absolute relative before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 before:origin-left w-max">
              <Link href={"/"}> Do`konlar manzillari Toshkent</Link>
            </div>
          </div>

          <ul className="text-sm space-y-3 w-1/4">
            <li>
              <h4 className="text-lg font-semibold">Munis savdo</h4>
            </li>
            <li>
              <Link href={"/"}>Biz haqimizda</Link>
            </li>
            <li>
              <Link href={"/"}>Yangiliklar va bloglar</Link>
            </li>
            <li>
              <Link href={"/"}>Bizning do&apos;konlarimiz</Link>
            </li>
          </ul>
          <ul className="text-sm space-y-3 w-1/4 ">
            <li>
              <h4 className="text-lg font-semibold">Kompaniya</h4>
            </li>
            <li>
              <Link href={"/"}>Biz haqimizda</Link>
            </li>
            <li>
              <Link href={"/"}>Yangiliklar va bloglar</Link>
            </li>
            <li>
              <Link href={"/"}>Bizning do&apos;konlarimiz</Link>
            </li>
          </ul>
          <ul className="text-sm space-y-3 w-1/4 ">
            <li>
              <h4 className="text-lg font-semibold">Kompaniya</h4>
            </li>
            <li>
              <Link href={"/"}>Biz haqimizda</Link>
            </li>
            <li>
              <Link href={"/"}>Yangiliklar va bloglar</Link>
            </li>
            <li>
              <Link href={"/"}>Bizning do&apos;konlarimiz</Link>
            </li>
          </ul>
        </div>
        <hr className="bg-gray-300 w-full my-5" />
        <p className="text-gray-300 text-sm">
          2019-2023 © Muniskredit.uz. Barcha huquqlar himoyalangan. Tovarlarning
          ko&apos;rsatilgan qiymati va ularni sotib olish shartlari joriy sanaga
          amal qiladi
        </p>
      </div>
    </footer>
  );
};

export default index;
