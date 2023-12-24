"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import Catalog from "./Catalog";
import { PhoneNumber } from "@/utils/constants/contact";

import RuFlagIcon from "@/assests/icons/russia.svg";
import UzFlagIcon from "@/assests/icons/uzbekistan.svg";
import Logo from "@/assests/images/logo.png";

import {
  CartIcon,
  CloseIcon,
  HeartIcon,
  LocationIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@/assests/icons/svgicons";

const categoryPath = [
  { id: 1, category: `AKSIYALAR` },
  { id: 2, category: "XAVO SOVUTGICHLAR" },
  { id: 3, category: "SMARTFONLAR" },
  { id: 4, category: "MUZLATGICHLAR" },
  { id: 5, category: "CHANGYUTGICHLAR" },
  { id: 6, category: "NOUTBUKLAR" },
  { id: 7, category: "TELEVIZORLAR" },
];

export default function Navbar() {
  const { locale: locale } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [lang, setLang] = useState(locale);

  const handleOpenModal = () => setIsChecked(prev => !prev);

  const handleCheckLang = (e: any) => setLang(e.target.value);

  const handleOpenCatalog = () => setIsOpenCatalog(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="relative">
        <div className="bg-black text-[#f7f7f7]">
          <div className="container mx-auto flex-between h-[36px] w-full">
            <div className="flex-y-center gap-5">
              <button className="flex-y-center gap-1.5">
                <LocationIcon />
                <span className="text-[14px]">Farg&apos;ona</span>
              </button>
              <span className="text-[14px]">Bizning do`konlarimiz</span>
            </div>
            <div className="flex-center gap-5 relative">
              <div className="text-[14px] flex-center gap-1">
                Aloqa markazi :
                <Link href={`tel:${PhoneNumber.original_number}`}>
                  <h5 className="text-[15px] font-semibold">
                    {PhoneNumber.public_number}
                  </h5>
                </Link>
              </div>

              <button
                className="flex-center text-[14px] gap-1 w-24"
                onClick={handleOpenModal}
              >
                <Image
                  src={lang === "/uz" ? UzFlagIcon : RuFlagIcon}
                  alt="Flag Icon"
                  width={18}
                  height={18}
                />
                {lang === "/uz" ? "O'zbekcha" : "Русский"}
              </button>

              <div
                className={`w-max h-auto bg-white text-black shadow-md rounded absolute right-0 z-20 top-full text-[15px] py-1 px-3 mt-2 ${
                  isChecked ? "block" : "hidden"
                }`}
              >
                <h5 className="font-semibold px-1 pt-1">Tilni tanlang</h5>
                <Link
                  href={"/uz"}
                  locale="uz"
                  className="flex-y-center gap-2 px-1"
                >
                  <input
                    type="radio"
                    id="lang-uz"
                    name="lang"
                    onChange={handleCheckLang}
                    checked={lang === "uz"}
                    className="my-2 bg-red-500 text-red-500"
                  />
                  <label
                    htmlFor="lang-uz"
                    className="hover:text-red-500 transition-all duration-300 rounded cursor-pointer flex-y-center gap-1"
                  >
                    <Image
                      src={UzFlagIcon}
                      alt="lang icon"
                      width={18}
                      height={18}
                    />
                    O&apos;zbekcha
                  </label>
                </Link>
                <Link
                  href={"/ru"}
                  locale="ru"
                  className="flex-y-center gap-2 p-1"
                >
                  <input
                    type="radio"
                    id="lang-ru"
                    name="lang"
                    checked={lang === "ru"}
                    onChange={handleCheckLang}
                  />
                  <label
                    htmlFor="lang-ru"
                    className="hover:text-red-500 transition-all duration-300 rounded cursor-pointer flex-y-center gap-1"
                  >
                    <Image
                      src={RuFlagIcon}
                      alt="lang icon"
                      width={18}
                      height={18}
                      className="shadow-lg"
                    />
                    Русский
                  </label>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`w-full bg-white flex items-center h-16 z-10 ${
            scrolled ? "fixed top-0 shadow-md" : ""
          }`}
        >
          <div className="flex container mx-auto justify-between items-center w-full py-4 relative">
            {isOpenCatalog && <Catalog scrolled={scrolled} />}
            <div className="flex-y-center gap-10 w-3/4">
              <Link href={"/"}>
                <Image
                  src={Logo}
                  alt="Munis savdo logo"
                  width={120}
                  height={40}
                />
              </Link>
              <button
                className="bg-red-500 py-1 px-3 rounded text-white flex-y-center gap-2"
                onClick={handleOpenCatalog}
              >
                <span>Katalog</span>
                {isOpenCatalog ? <CloseIcon /> : <MenuIcon />}
              </button>
              <div className="max-w-xl w-full flex-y-center">
                <input
                  type="search"
                  placeholder="Mahsulot qidirish"
                  className="outline-none h-8 px-4 w-full py-2 border-2 rounded-l border-r-0 focus:border-red-500 [&:focus+button>svg]:stroke-white [&:focus+button]:bg-red-500"
                />
                <button className="w-20 h-8 bg-[#f7f7f7] flex-center bg-opacity-20 border-2 border-red-500 rounded-r">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center w-1/4 gap-4 text-[12px] font-semibold">
              <Link href={`/cabinet/orders`}>
                <button className="hover:bg-[#f7f7f7] py-0.5 w-14 rounded flex-center flex-col">
                  <UserIcon />
                  <span>Kirish</span>
                </button>
              </Link>
              <Link href={"/"}>
                <button className="hover:bg-[#f7f7f7] py-0.5 w-14 rounded flex-center flex-col">
                  <HeartIcon />
                  <span>Saralangan</span>
                </button>
              </Link>
              <Link href={"/"}>
                <button className="hover:bg-[#f7f7f7] py-0.5 w-14 rounded flex-center flex-col">
                  <CartIcon />
                  <span>Savatcha</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={`h-16 bg-white ${scrolled ? "block" : "hidden"}`}></div>
        <div className="bg-white w-full pt-1">
          <nav className="container mx-auto">
            <ul
              className={`flex-y-center gap-10 pb-3 mb-2 [&>li]:text-[15px] font-semibold `}
            >
              {categoryPath.map(category => (
                <li
                  key={category.id}
                  className="before:w-full before:h-0.5 before:-bottom-1.5 before:bg-black before:absolute relative before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 before:origin-left"
                >
                  <Link href={"/"}>{category.category}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
