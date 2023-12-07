"use client";

import Link from "next/link";
import React, { useState } from "react";

import { ArrowRightIcon, Icon1 } from "@/assests/icons/svgicons";

const catalogData = [
  {
    category: "Smartfonlar va telefonlar 1",
    productTypes: ["Type 1.1", "Type 1.2", "Type 1.3"],
  },
  {
    category: "Kiyim 2",
    productTypes: ["Type 2.1", "Type 2.2", "Type 2.3"],
  },
];

const Index = () => {
  const [hoveredCategory, setHoveredCategory] = useState(catalogData[0]?.category);

  return (
    <nav className="h-[calc(100vh-130px)] w-full absolute top-full left-1/2 -translate-x-1/2 container mx-auto flex z-10 bg-white">
      <aside className="w-max border-r border-gray-400  py-5">
        <ul className="space-y-1">
          {catalogData.map(item => (
            <li
              className={`hover:bg-[#f7f7f7] flex-between rounded text-[0.875rem] ${
                item.category === hoveredCategory
                  ? "bg-[#f7f7f7]"
                  : "bg-[#fff] "
              }`}
              key={item.category}
              onMouseEnter={() => setHoveredCategory(item.category)}
            >
              <Link href="/" className="flex-between p-2 w-full gap-2">
                <h5 className="flex-y-center gap-2 cursor-pointer whitespace-nowrap">
                  <Icon1 />
                  {item.category}
                </h5>
                <ArrowRightIcon />
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="w-4/5 p-5">
        {catalogData.find(item => item.category === hoveredCategory) && (
          <>
            <Link href="/">
              <h5>{hoveredCategory}</h5>
            </Link>
            <div className="grid grid-cols-3 gap-5">
              {catalogData
                .find(item => item.category === hoveredCategory)
                ?.productTypes.map((type, index) => (
                  <ul key={index}>
                    <li>
                      <Link href="/" key={index}>
                        <h5>{type}</h5>
                      </Link>
                    </li>
                  </ul>
                ))}
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Index;
