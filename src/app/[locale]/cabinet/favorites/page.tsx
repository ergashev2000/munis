import Link from "next/link";
import { ArrowRightIcon } from "@/assests/icons/svgicons";
import {
  Button,
  CartProductCard,
  Recommended,
  SelectMonth,
} from "@/components";

export default function Page() {
  return (
    <>
      <div className="gap-5 min-h-[200px]">
        <div className="py-8 flex-y-center space-x-3 text-[16px]">
          <Link href={"/"}>
            <div className="flex-y-center gap-3 rounded stroke-black">
              <span>Bosh sahifa </span> <ArrowRightIcon />
            </div>
          </Link>

          <Link href={"/"}>
            <div className="flex-y-center gap-5 rounded">
              <span>Tanlanganlar </span>
            </div>
          </Link>
        </div>
        <div className="flex gap-5">
          <div className="w-3/4">
            <div>
              <div className="space-y-2">
                <CartProductCard />
              </div>
            </div>
          </div>

          <div className="w-1/4 bg-white rounded-lg p-4">
            <h4 className="font-semibold">
              Sizning istaklaringiz ro&apos;yxati:
            </h4>
            <div className=" flex items-center gap-4 border-t mt-4">
              <h5 className="text-[16px] font-semibold py-3">
                Mahsulotlar soni
              </h5>
              <span className="text-sm font-semibold text-red-500">1</span>
            </div>
            <Button classname="text-sm mb-2" outline={false}>
              Hammasini o&apos;chirish
            </Button>
            <Link href={"/"}>
              <Button classname="text-white text-sm" outline>
                Savatga oʻtish
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Recommended />
      </div>
    </>
  );
}
