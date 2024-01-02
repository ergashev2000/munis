import Link from "next/link";
import { ArrowRightIcon } from "@/assests/icons/svgicons";
import {
  Button,
  CartProductCard,
  CustomPaths,
  Recommended,
  SelectMonth,
} from "@/components";

export default function Page() {
  return (
    <>
      <div className="gap-5 min-h-[200px]">
        <div>
          <CustomPaths />
        </div>
        <div className="flex gap-5">
          <div className="w-3/4">
            <div className="space-y-2">
              <CartProductCard isCart />
            </div>
          </div>

          <div className="w-1/4 space-y-5">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold pb-2">Buyurtmangiz:</h4>
              <ul className="space-y-2">
                <li>
                  <h4 className="text-[16px] font-semibold">Mahsulotlar:</h4>
                </li>
                <li className="flex items-center gap-1 justify-between text-[16px] border rounded p-1">
                  <h4 className="line-clamp-2 text-[16px] leading-4">
                    Smartfon Tecno Spark 10C 4/128GB Meta Blue
                  </h4>
                  <div className="text-[15px] whitespace-nowrap">
                    <span>1 x </span>
                    <span className="whitespace-nowrap text-red-500">
                      1 500 000
                    </span>
                  </div>
                </li>
              </ul>
              <div className="flex items-center justify-between gap-2 border-t mt-4">
                <h5 className="text-[16px] font-semibold py-3">
                  Umumiy to&apos;lovingiz:
                </h5>
                <span className="text-sm font-semibold text-red-500">
                  4 000 000 so&apos;m
                </span>
              </div>
              <Button className="text-white text-sm" outline>
                Rasmiylashtirish
              </Button>
            </div>

            <div className="bg-white rounded-lg h-max p-4 font-semibold text-lg">
              <h4>Muddatli to&apos;lovga</h4>
              <SelectMonth />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Recommended />
      </div>
    </>
  );
}
