"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Card from "@/components/Card";
import Checkbox from "@/components/ui/Checkbox";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import { FilterBar } from "@/components";

export default function Page() {
  const router = useParams();

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
            <div className="bg-white p-4 mb-4 rounded-lg relative flex justify-end">
              <button className="text-sm font-semibold flex-y-center gap-2 mr-2">
                Saralash <ArrowRightIcon />
              </button>
              <div className="text-sm text-gray-500 space-y-2 absolute top-11 z-10 right-6 overflow-hidden flex flex-col items-start bg-white rounded-lg shadow-2xl">
                <button className="hover:bg-gray-200 w-full text-start px-4 py-1">
                  Sana boyicha
                </button>
                <button className="hover:bg-gray-200 w-full text-start px-4 py-1">
                  Narx boyicha
                </button>
                <button className="hover:bg-gray-200 w-full text-start px-4 py-1">
                  Omboboligi boyicha
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
