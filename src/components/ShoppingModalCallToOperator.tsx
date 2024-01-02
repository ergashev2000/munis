import { PhoneCallIcon } from "@/assests/icons/svgicons";
import Link from "next/link";
import React from "react";

export default function ShoppingModalCallToOperator() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Mahsulotlar nomi:</h3>
      <ul className="space-y-4 text-sm font-semibold">
        <li className="text-[15px] flex justify-between gap-2">
          <h4>
            1. <span className="text-sm font-semibold text-red-500">Nomi:</span>{" "}
            Lorem ipsum dolor sit amet consectetur ad
          </h4>
          <p className="text-[15px] text-red-500 whitespace-nowrap">
            5,000,000 so&apos;m
          </p>
        </li>
      </ul>
      <h4 className="text-sm border rounded-lg py-2 px-4">
        Mahsulot kodi: <span className="text-red-500 font-semibold">7371</span>
      </h4>
      <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between gap-2">
        <h5 className="font-semibold">+99890 888 77 66</h5>
        <Link href={"tel:908575757"}>
          <button className="bg-red-500 rounded w-10 h-10 flex-center">
            <PhoneCallIcon/>
          </button>
        </Link>
      </div>
    </div>
  );
}
