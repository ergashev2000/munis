"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import MainCard from "@/components/MainCard";
import Checkbox from "@/components/ui/Checkbox";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import { FilterBar } from "@/components";
import { productsdata } from "../../../../../data";

export default function Page() {
  const router = useParams();
  const [openFilter, setOpenFilter] = useState<boolean>(false)

  const handleOpenFilter = () => setOpenFilter(prev => !prev)

  return (
    <section>
      <div className="min-h-screen container mx-auto">
        <div className="py-4 flex-y-center space-x-3 text-[16px]">
          <Link href={"/"}>
            <div className="flex-y-center gap-3 rounded stroke-black">
              <span>Bosh sahifa </span> <ArrowRightIcon />
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex-y-center gap-5 rounded">
              <span>Bosh sahifa </span> <ArrowRightIcon />
            </div>
          </Link>
        </div>
        <h3 className="pb-2 font-semibold text-2xl">Iqlim texnikasi</h3>
        <div className="flex gap-5 mb-5">
          <aside className="bg-white rounded-xl p-6 pt-2 w-1/4">
            <FilterBar />
            <FilterBar />
            <FilterBar />
            <FilterBar />
          </aside>
          <div className="">
            <div className="bg-white py-3 mb-4 rounded-lg relative flex justify-end">
              <button
                className={`text-sm font-semibold flex-y-center gap-2 [&>svg]:stroke-black  p-0.5 rounded px-2 mr-2 ${
                  openFilter
                    ? "bg-gray-100 [&>svg]:-rotate-90"
                    : "bg-transparent [&>svg]:rotate-90"
                }`}
                onClick={handleOpenFilter}
              >
                Saralash <ArrowRightIcon />
              </button>
              <div
                className={`text-sm text-gray-500 space-y-1 absolute top-11 z-10 right-6 overflow-hidden flex flex-col items-start bg-white rounded-lg shadow-2xl ${
                  openFilter ? "block" : "hidden"
                }`}
              >
                <button className="hover:bg-gray-200 w-full text-start px-4 py-2">
                  Sana boyicha
                </button>
                <button className="hover:bg-gray-200 w-full text-start px-4 py-2">
                  Narx boyicha
                </button>
                <button className="hover:bg-gray-200 w-full text-start px-4 py-2">
                  Omboboligi boyicha
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {productsdata?.map(item => (
                <MainCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
