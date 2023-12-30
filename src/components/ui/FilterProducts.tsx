"use client";

import { ArrowRightIcon } from "@/assests/icons/svgicons";
import React, { useState } from "react";

export default function FilterProducts() {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const handleOpenFilter = () => setOpenFilter(prev => !prev);
  return (
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
  );
}
