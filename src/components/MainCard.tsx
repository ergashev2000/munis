"use client";

import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { openOrderModal } from "../redux/slices/modalsSlices";

import { CartIcon, HeartIcon } from "@/assests/icons/svgicons";

const MainCard = ({ item }: { item: any }) => {
  const dispatch = useDispatch();
  
  const handleOrderOpenModal = () => {
    dispatch(openOrderModal());
  };

  return (
    <div className="p-2 rounded-xl bg-white max-w-[300px] relative hover:shadow-[0_2px_24px_rgba(0,0,0,0.06)] transition-all duration-300">
      <Link href={`/product/${item?.id}`}>
        <div className="relative w-full max-w-[360px] group overflow-hidden h-64 rounded-lg">
          <Image
            width={300}
            height={400}
            src={item?.img}
            alt="Main Image"
            className="block w-full max-w-full h-auto rounded-lg hover:scale-105 transition-all duration-300"
          />
          {item?.img2 && (
            <Image
              width={300}
              height={400}
              src={item?.img2}
              alt="Hover Image"
              className="absolute top-0 right-0 left-0 bottom-0 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"
            />
          )}
        </div>
      </Link>
      <button className="hover:bg-white hover:bg-opacity-50 absolute top-3 right-3 rounded-full [&>svg]:hover:fill-red-500 transition-all duration-300 w-7 h-7 flex-center [&>svg]:hover:stroke-red-500">
        <HeartIcon color={"#a6a6a6"} />
      </button>
      <div className="space-y-1.5">
        <h4 className="font-semibold pt-2 text-red-500">
          {item?.price} so&apos;m
        </h4>
        <Link href={`/product/${item?.id}`}>
          <h3 className="text-[16px] font-semibold line-clamp-1 hover:bg-white  hover:text-red-500 transition-all duration-300">
            Smartfon Oppo A17 4/64GB Blue Oppo A17 4/64GB Blue
          </h3>
        </Link>
        <p className="text-[14px] text-opacity-50 ">
          Brend:{" "}
          <Link href={"/"}>
            <span className="text-opacity-90 underline font-semibold">
              Xiomi
            </span>
          </Link>
        </p>
        <div className="flex-y-center gap-2 pt-1">
          <button
            className="w-[calc(100%-40px)] border border-gray-200 rounded-lg hover:bg-red-500 hover:text-white text-[15px] transition-all duration-300 text-black font-semibold h-11 px-2 hover:border-red-500"
            onClick={handleOrderOpenModal}
          >
            Hozirni o&apos;zidayoq xarid qilish
          </button>
          <button className="min-w-[55px] h-11 border border-red-500   rounded-lg flex-center bg-red-500">
            <CartIcon color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
