import {
  CartIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@/assests/icons/svgicons";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";

export default function CartProductCard({
  isCart = false,
}: {
  isCart?: boolean;
}) {
  return (
    <>
      <li className="flex items-center justify-between gap-5 bg-white rounded-lg p-3">
        <div className="flex items-center gap-3 w-3/4">
          <Image
            src={"https://fakeimg.pl/500/300"}
            alt="Image"
            width={150}
            height={200}
            className="object-cover max-w-full rounded-lg h-28 w-24"
          />
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold text-red-500">1 500 000</p>
            <Link href={"/"}>
              <h4 className="font-semibold hover:text-red-500 line-clamp-2">
                Smartfon Tecno Spark 10C 4/128GB Meta Blue
              </h4>
            </Link>
            <p className="text-[15px]">
              Mahsulot kodi: <span>AD72123</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around gap-3 w-1/4">
          <div className="flex items-center gap-5">
            <Tooltip
              content={
                <div className="text-[15px] py-1 px-2 bg-black text-white rounded-lg">
                  Mahsulotni o&apos;chirish
                </div>
              }
            >
              <button className="hover:bg-gray-100 rounded-full w-10 h-10 flex-center transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6">
                <TrashIcon />
              </button>
            </Tooltip>

            {isCart ? (
              <Tooltip
                content={
                  <div className="text-[15px] px-2 py-1 bg-black text-white rounded-lg">
                    Sevimli mahsulot
                  </div>
                }
              >
                <button className="hover:bg-gray-100 rounded-full p-1 flex-center transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6">
                  <HeartIcon />
                </button>
              </Tooltip>
            ) : (
              <Tooltip
                delay={500}
                content={
                  <div className="text-[15px] px-2 py-1 bg-black text-white rounded-lg">
                    Savatga qo&apos;shish
                  </div>
                }
              >
                <button className="hover:bg-gray-100 rounded-full w-10 h-10 flex-center transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6">
                  <CartIcon />
                </button>
              </Tooltip>
            )}
          </div>
          {isCart && (
            <div className="flex items-center gap-3">
              <button className="h-7 w-7 bg-gray-100 rounded flex-center">
                <PlusIcon />
              </button>
              <span>1</span>
              <button className="h-7 w-7 bg-gray-100 rounded flex-center">
                <MinusIcon />
              </button>
            </div>
          )}
        </div>
      </li>
    </>
  );
}
