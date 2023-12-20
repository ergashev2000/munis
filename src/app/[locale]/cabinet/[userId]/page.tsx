"use client";

import React from "react";
import Link from "next/link";

import { useParams } from "next/navigation";
import { Orders, Settings } from "@/components";
import { OrderCartIcon, SettingsIcon, UserIcon } from "@/assests/icons/svgicons";

export default function Page() {
  const { userId } = useParams();

  return (
    <div className="flex min-h-[500px] max-w-5xl mx-auto py-8">
      <aside className="w-1/4">
        <h2 className="text-2xl font-semibold pb-5">Islomjon</h2>
        <ul className="space-y-1">
          <li className="w-48">
            <Link href={"orders"}>
              <p
                className={`py-2 px-4 rounded-lg flex items-center gap-2 ${
                  userId === "orders" ? "bg-gray-200" : ""
                }`}
              >
                <OrderCartIcon/> Buyurtmalarim
              </p>
            </Link>
          </li>
          <li className="w-48">
            <Link href={"settings"}>
              <p
                className={`py-2 px-4 rounded-lg gap-2 flex items-center ${
                  userId === "settings" ? "bg-gray-200" : ""
                }`}
              >
                <SettingsIcon /> Settings
              </p>
            </Link>
          </li>
        </ul>
      </aside>
      <div className="w-3/4">
        {userId === "orders" && <Orders />}
        {userId === "settings" && <Settings />}
      </div>
    </div>
  );
}
