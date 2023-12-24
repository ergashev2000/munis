"use client";

import React, { useState } from "react";

export default function Orders() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <div className="flex gap-5">
        <button
          className={`w-44 h-10 rounded border ${isActive ? "" : "bg-gray-200"}`}
          onClick={() => setIsActive(false)}
        >
          Barcha buyurtmalar
        </button>
        <button
          className={`w-44 h-10 rounded border ${isActive ? "bg-gray-200" : ""}`}
          onClick={() => setIsActive(true)}
        >
          Faol
        </button>
      </div>

      {isActive ? (
        <div className="max-w-2xl border p-5 mt-5 rounded-lg min-h-[250px] flex-center">
          <div className="text-center space-y-5">
            <h4 className="text-xl">Sizda faol buyurtma mavjud emas!</h4>
            <button className="py-2 px-5 rounded-lg bg-red-500 text-white">
              Xaridlarni boshlash
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-2xl border p-5 mt-5 rounded-lg">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Mahsulot nomi:
                </p>
                <p>Kir mashina SM20213 </p>
              </li>

              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Buyurtma sanasi:
                </p>
                <p>20-may 2023-yil 20:00 </p>
              </li>

              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Filial manzili:
                </p>
                <p>Farg&apos;gona filiali</p>
              </li>

              <li className="flex gap-2 ">
                <p className="min-w-[200px] whitespace-nowrap font-semibold ">
                  Buyurtmachi manzili:
                </p>
                <p className="">
                  Toshkent sh., Shayxontohur tumani, Gulobod mavzesi, Beruniy
                  ko`chasi, 2-chi uy
                </p>
              </li>

              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Buyurtma qiymati:
                </p>
                <p>1 200 000 so`m</p>
              </li>
            </ul>
          </div>

          <div className="max-w-2xl border p-5 mt-5 rounded-lg">
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Mahsulot nomi:
                </p>
                <p>Kir mashina SM20213 </p>
              </li>

              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Buyurtma sanasi:
                </p>
                <p>20-may 2023-yil 20:00 </p>
              </li>

              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Filial manzili:
                </p>
                <p>Farg&apos;ona filiali</p>
              </li>

              <li className="flex gap-2 ">
                <p className="min-w-[200px] whitespace-nowrap font-semibold ">
                  Buyurtmachi manzili:
                </p>
                <p className="">
                  Toshkent sh., Shayxontohur tumani, Gulobod mavzesi, Beruniy
                  ko`chasi, 2-chi uy
                </p>
              </li>

              <li className="flex items-center gap-2">
                <p className="min-w-[200px] whitespace-nowrap font-semibold">
                  Buyurtma qiymati:
                </p>
                <p>1 200 000 so`m</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
