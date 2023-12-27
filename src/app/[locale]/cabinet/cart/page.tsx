import React from "react";
import Link from "next/link";
import {
  ArrowRightIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@/assests/icons/svgicons";
import Image from "next/image";
import { Button, Recommended } from "@/components";

export default function Page() {
  return (
    <>
      <div className="gap-5 min-h-[500px]">
        <div className="py-8 flex-y-center space-x-3 text-[16px]">
          <Link href={"/"}>
            <div className="flex-y-center gap-3 rounded stroke-black">
              <span>Bosh sahifa </span> <ArrowRightIcon />
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex-y-center gap-5 rounded">
              <span>Savatcha </span>
            </div>
          </Link>
        </div>
        <div className="flex gap-5">
          <div className="w-3/4">
            <div>
              <ul className="space-y-5">
                <li className="flex items-center justify-between gap-5 bg-white rounded-lg p-3">
                  <div className="flex items-center gap-3 w-2/3">
                    <Image
                      src={"https://fakeimg.pl/500/300"}
                      alt="Image"
                      width={150}
                      height={200}
                      className="object-cover max-w-full rounded-lg h-28 w-24"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-xl font-semibold text-red-500">
                        1 500 000
                      </p>
                      <Link href={"/"}>
                        <h4 className="font-semibold hover:text-red-500 line-clamp-2">
                          Smartfon Tecno Spark 10C 4/128GB Meta Blue
                        </h4>
                      </Link>
                      <p className="text-[15px]">
                        Mahsulot kodi: <span>AD72123</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-around gap-3 w-1/3">
                    <div className="flex items-center gap-5">
                      <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex-center transition-all duration-300">
                        <TrashIcon />
                      </button>
                      <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex-center transition-all duration-300">
                        <HeartIcon />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="h-7 w-7 bg-gray-100 rounded flex-center">
                        <PlusIcon />
                      </button>
                      <span>1</span>
                      <button className="h-7 w-7 bg-gray-100 rounded flex-center">
                        <MinusIcon />
                      </button>
                    </div>
                  </div>
                </li>
                <li className="flex items-center justify-between gap-5 bg-white rounded-lg p-3">
                  <div className="flex items-center gap-3 w-2/3">
                    <Image
                      src={"https://fakeimg.pl/500/300"}
                      alt="Image"
                      width={150}
                      height={150}
                      className="object-cover max-w-full rounded-lg h-28 w-24"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-xl font-semibold text-red-500">
                        1 500 000
                      </p>
                      <Link href={"/"}>
                        <h4 className="font-semibold hover:text-red-500 line-clamp-2">
                          Smartfon Tecno Spark 10C 4/128GB Meta Blue
                        </h4>
                      </Link>
                      <p className="text-[15px]">
                        Mahsulot kodi: <span>AD72123</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-around gap-3 w-1/3">
                    <div className="flex items-center gap-5">
                      <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex-center transition-all duration-300">
                        <TrashIcon />
                      </button>
                      <button className="hover:bg-gray-100 rounded-full w-8 h-8 flex-center transition-all duration-300">
                        <HeartIcon />
                      </button>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="h-7 w-7 bg-gray-100 rounded flex-center">
                        <PlusIcon />
                      </button>
                      <span>1</span>
                      <button className="h-7 w-7 bg-gray-100 rounded flex-center">
                        <MinusIcon />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold pb-2">Buyurtmangiz:</h4>
              <ul className="space-y-2">
                <li>
                  <h4 className="text-[16px] font-semibold">Mahsulotlar:</h4>
                </li>
                <li className="flex items-center gap-1 justify-between text-[16px] border rounded p-1">
                  <h4 className="line-clamp-2 text-[16px] leading-4">
                    Smartfon Tecno Spark 10C 4/128GB Meta Blue
                  </h4>
                  <div className="text-[15px] whitespace-nowrap">
                    <span>1 x </span>
                    <span className="whitespace-nowrap text-red-500">
                      1 500 000
                    </span>
                  </div>
                </li>
              </ul>
              <div className="flex items-center justify-between gap-2 border-t mt-4">
                <h5 className="text-[16px] font-semibold py-3">
                  Umumiy to&apos;lovingiz:
                </h5>
                <span className="text-[16px] font-semibold text-red-500">
                  4 000 000 so&apos;m
                </span>
              </div>
              <Button classname="text-white text-sm" outline>
                Rasmiylashtirish
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Recommended />
      </div>
    </>
  );
}
