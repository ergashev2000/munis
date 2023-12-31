"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchIcon } from "@/assests/icons/svgicons";
import Img from "@/assests/images/img2.jpg";

export default function SearchProduct() {
  const [isOpenProduct, setIsOpenProduct] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return (
    <div className="relative max-w-xl w-full">
      <div className="w-full flex items-center">
        <input
          type="search"
          placeholder="Mahsulot qidirish"
          className="outline-none h-[43px] px-4 w-full py-2 border-2 rounded-l border-r-0 focus:border-red-500 [&:focus+button>svg]:stroke-white [&:focus+button]:bg-red-500"
          onChange={handleSearch}
          value={searchValue}
          onFocus={() => setIsOpenProduct(true)}
          onBlur={() => setIsOpenProduct(false)}
        />
        <button className="w-20 h-[43px] bg-[#f7f7f7] flex items-center justify-center bg-opacity-20 border-2 border-red-500 rounded-r">
          <SearchIcon />
        </button>
      </div>
      {isOpenProduct && (
        <div className="h-auto max-w-md w-full rounded-lg p-2 bg-white shadow-xl top-10 z-20 absolute">
          <ul className="space-y-1">
            {!!searchValue && (
              <li>
                <Link href={"/"}>
                  <div className="flex items-center gap-2 bg-gray-100 rounded border border-transparent hover:border-gray-300 transition-all duration-300">
                    <Image
                      src={Img}
                      alt="Product title"
                      width={100}
                      height={160}
                      className="w-auto h-16 rounded object-cover border-gray-300"
                    />
                    <div className="flex flex-col justify-start items-start p-1 gap-1">
                      <h4 className="text-sm">Lorem ipsum dolor sit amet.</h4>
                      <p className="font-semibold text-[14px] text-red-500">
                        5,000,000
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            )}
          </ul>
          {!searchValue && (
            <ul className="space-y-1">
              <li>
                <h5 className="font-semibold px-2">
                  Eng ko&apos;p qidirilganlar
                </h5>
              </li>
              <li
                className="text-sm my-0.5 px-2 hover:bg-gray-100 transition-all duration-300 w-full cursor-pointer"
                onClick={() => setSearchValue("Lorem, ipsum dolor0")}
              >
                Lorem, ipsum dolor0
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
