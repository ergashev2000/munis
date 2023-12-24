"use client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "./ui/Button";
import { formatPrice } from "@/utils/formatPrice";

const totleSum = 1425000;
const percent = [0, 0, 0];

export default function Index() {
  const [select, setSelect] = useState<number>(3);
  const [totalCalc, setTotalCalc] = useState<string>("");
  const [monthCalc, setMonthCalc] = useState<string>("");

  const handleSelect = useCallback((month: number) => setSelect(month), []);

  const handleCalculation = (xid: number) => {
    const totle = totleSum + totleSum * (percent[xid] / 100);
    setTotalCalc(formatPrice(totle));

    let totalMonth = formatPrice(Math.floor(totle / select));
    setMonthCalc(totalMonth);
  };

  const handlePercent = (selectedMonth: any) => {
    switch (selectedMonth) {
      case 3:
        return handleCalculation(0);
      case 12:
        return handleCalculation(1);
      case 24:
        return handleCalculation(2);
      default:
        return "Noto'g'ri son";
    }
  };

  useEffect(() => {
    handlePercent(select);
  }, [select]);

  return (
    <div className="space-y-2">
      <ul className="flex items-center justify-between gap-2 py-2">
        {[3, 12, 24]?.map((item: any) => (
          <li
            key={item}
            onClick={() => handleSelect(item)}
            className={`h-10 w-16 rounded-lg border-2 flex-center border-gray-300 hover:font-semibold  cursor-pointer ${
              select === item ? "border-red-500 font-semibold" : ""
            }`}
          >
            {item} oy
          </li>
        ))}
      </ul>
      <div className="space-y-2 pb-2">
        <div className="text-sm text-gray-700 flex items-center justify-between whitespace-nowrap">
          <h4>Oylik to&apos;lov:</h4> <span>{monthCalc} so&apos;m</span>
        </div>
        <div className="text-sm text-gray-700 flex justify-between items-center gap-2 whitespace-nowrap">
          <h4>Umumiy summa:</h4> <span>{totalCalc} so&apos;m</span>
        </div>
      </div>
      <Button classname="text-white text-sm" outline>
        Bo&apos;lib to&apos;lash
      </Button>
    </div>
  );
}
