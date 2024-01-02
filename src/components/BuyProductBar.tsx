"use client";

import { Button, SelectMonth } from ".";
import { useDispatch } from "react-redux";
import { openOrderModal } from "@/redux/slices/modalsSlices";

export default function BuyProductBar() {
  const dispatch = useDispatch();

  const handleOrderOpenModal = () => {
    dispatch(openOrderModal());
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg h-max space-y-2">
        <h4 className="text-lg font-semibold">Mahsulot narxi</h4>
        <p className="text-2xl text-red-500 font-semibold">
          1 425 000 so&apos;m
        </p>
        <Button outline={false} className="text-sm">
          Savatchaga qo`shish
        </Button>
        <Button
          outline
          className="text-white text-sm"
          onClick={handleOrderOpenModal}
        >
          Sotib olish
        </Button>
      </div>

      <div className="bg-white rounded-lg h-max p-4 font-semibold text-lg">
        <h4>Muddatli to&apos;lovga</h4>
        <SelectMonth />
      </div>
    </>
  );
}
