"use client";

import React, { useState } from "react";

import { ArrowRightIcon } from "@/assests/icons/svgicons";

import Checkbox from "../ui/Checkbox";

export default function Filter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => setIsOpen(prev => !prev);

  return (
    <>
      <div className="border-b border-gray-300 pt-2">
        <div
          className={`flex-y-center justify-between gap-5 cursor-pointer transition-all duration-500 text-sm pb-3 ${
            isOpen ? "text-red-500" : "text-black"
          }`}
          onClick={handleOpen}
        >
          Ishlab chiqaruvchi
          <span
            className={`transition-all duration-100 ${
              isOpen ? "-rotate-90 stroke-red-500" : "rotate-90 stroke-black"
            }`}
          >
            <ArrowRightIcon />
          </span>
        </div>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <ul className="text-[16px] py-1 space-y-1">
            <li className="relative pl-6 flex items-center">
              <Checkbox />
            </li>
            <li className="relative pl-6 flex items-center">
              <Checkbox />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
