"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Card from "@/components/Card";
import Checkbox from "@/components/ui/Checkbox";

import { ArrowRightIcon } from "@/assests/icons/svgicons";

export default function Page() {
  const router = useParams();
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => setIsOpen(prev => !prev);

  return (
    <section>
      <div className="min-h-screen container mx-auto">
        <div className="flex-y-center gap-5">
          <Link href={"/"} className="flex-y-center gap-5 rounded">
            <span>Bosh sahifa </span> <ArrowRightIcon />
          </Link>
        </div>
        <h3 className="pt-10 pb-2 font-semibold text-2xl">Iqlim texnikasi</h3>
        <div className="flex gap-5 mb-5">
          <aside className="bg-white rounded-xl p-6 w-1/4">
            <div>
              <div className=" border-b border-gray-300 pb-4 ">
                <div
                  className="flex-y-center justify-between gap-5 "
                  onClick={handleOpen}
                >
                  Ishlab chiqaruvchi
                  <span className="rotate-90">
                    <ArrowRightIcon color="#000" />
                  </span>
                </div>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <ul className="text-[16px] pt-4 space-y-1">
                    <li className="relative pl-6 flex items-center">
                      <Checkbox />
                    </li>
                    <li className="relative pl-6 flex items-center">
                      <Checkbox />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
          <div className="">
            <div className="bg-white p-4 mb-4 rounded-lg relative flex justify-end">
              <button className="text-sm font-semibold flex-y-center gap-2 mr-2">
                Saralash <ArrowRightIcon />{" "}
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
