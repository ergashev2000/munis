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
              <CartProductCard />
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
