"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

const Index = () => {
  const pathname = usePathname();

  const [isChecked, setIsChecked] = useState(false);
  const [isOpenCatalog, setIsOpenCatalog] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [lang, setLang] = useState(pathname);

  const handleOpenModal = () => setIsChecked(prev => !prev);

  const handleCheckLang = (e: any) => setLang(e.target.value);

  const handleOpenCatalog = () => setIsOpenCatalog(prev => !prev);

  useEffect(() => {
    if (pathname) setLang(pathname);
  }, [pathname]);

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
        {isOpenCatalog && <Catalog />}
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
                className={`w-max h-auto bg-white text-black shadow-md rounded absolute right-0 top-full text-[15px] py-1 px-3 mt-2 ${
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
                    value={"/uz"}
                    onChange={handleCheckLang}
                    checked={lang === "/uz"}
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
                    value={"/ru"}
                    checked={lang === "/ru"}
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
          <div className="flex container mx-auto justify-between items-center w-full py-4">
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
                {isOpenCatalog ? <CloseIcon /> : <MenuIcon />}
                <span> Katalog</span>
              </button>
              <div className="max-w-xl w-full border-2 border-gray-300 rounded flex-y-center overflow-hidden">
                <input
                  type="search"
                  placeholder="Qidirish"
                  className="outline-none h-8 px-4 w-full py-2"
                />
                <button className="w-20 h-8 bg-[#f7f7f7] flex-center">
                  <SearchIcon />
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center w-1/4 gap-4 [&>button]:text-[12px] [&>button]:font-semibold [&>button]:flex-center [&>button]:flex-col [&>button]:py-0.5 [&>button]:w-14 [&>button]:rounded">
              <button className="hover:bg-[#f7f7f7]">
                <UserIcon />
                <span>Kirish</span>
              </button>
              <button className="hover:bg-[#f7f7f7]">
                <HeartIcon />
                <span>Saralangan</span>
              </button>
              <button className="hover:bg-[#f7f7f7]">
                <CartIcon />
                <span>Savatcha</span>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`h-16 bg-white ${scrolled ? "block" : "hidden"}`}
        ></div>
        <div className="bg-white w-full pt-1">
          <nav className="container mx-auto">
            <ul className="flex-y-center gap-5 pb-3 mb-2 [&>li]:text-[15px] font-semibold">
              <li className="before:w-full before:h-0.5 before:-bottom-1.5 before:bg-black before:absolute relative before:scale-x-0 before:transition-all before:duration-300 hover:before:scale-x-100 before:origin-left">
                <Link href={"/"}>AKSIYALAR</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Index;
