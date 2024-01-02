"use client";

import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";

import Catalog from "./Catalog";
import NavLinks from "./NavLinks";
import SearchProduct from "./SearchProduct";

import { branchsdata } from "@/utils/constants/branchs";
import { PhoneNumber } from "@/utils/constants/contact";

import RuFlagIcon from "@/assests/icons/russia.svg";
import UzFlagIcon from "@/assests/icons/uzbekistan.svg";
import Logo from "@/assests/images/logo.png";

import { openLoginModal } from "@/redux/slices/modalsSlices";

import {
  CartIcon,
  CloseIcon,
  HeartIcon,
  LocationIcon,
  MenuIcon,
  UserIcon,
} from "@/assests/icons/svgicons";

export default function Navbar() {
  const params = useParams();
  const dispatch = useDispatch();
  const handleCloseModal = useCallback(() => dispatch(openLoginModal()), []);

  const [lang, setLang] = useState(params?.locale);

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isOpenCatalog, setIsOpenCatalog] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpenBranch, setIsOpenBranch] = useState<boolean>(false);
  const [selectedBranch, setSelectedBranch] = useState<string>("Farg'ona");

  const handleOpenModal = (isOpenLang: any) => setIsChecked(isOpenLang);
  const handleCheckLang = (e: any) => setLang(e.target.value);
  const handleOpenCatalog = () => setIsOpenCatalog(prev => !prev);
  const handleOpenBranchs = () => setIsOpenBranch(prev => !prev);
  const handleSelectBranch = (name: string) => {
    setSelectedBranch(name);
    setIsOpenBranch(false);
  };

  useEffect(() => {
    setIsOpenBranch(false);
    setIsOpenCatalog(false);
    setIsChecked(false);
  }, [params]);

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
            <div className="flex-y-center gap-5 relative">
              <button
                className="flex-y-center gap-1.5 w-28"
                onClick={handleOpenBranchs}
              >
                <LocationIcon />
                <span className="text-[14px]">{selectedBranch}</span>
              </button>
              {isOpenBranch && (
                <ul className="absolute top-full mt-2 shadow-md left-0 bg-white text-black z-10 rounded">
                  {branchsdata.map((item: any) => (
                    <li
                      key={item.id}
                      onClick={() => handleSelectBranch(item.branch)}
                      className="text-[15px] cursor-pointer hover:bg-gray-100 py-1.5 px-5 flex items-center [&>svg]:w-3 [&>svg]:h-3 [&>svg]:absolute [&>svg]:left-1 [&>svg]:top-1/2 [&>svg]:-translate-y-1/2 relative"
                    >
                      {item.branch === selectedBranch && <LocationIcon />}
                      <span>{item.branch}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Link href={"/branches"}>
                <span className="text-[14px] link-effect before:bottom-0">
                  Bizning do&apos;konlarimiz
                </span>
              </Link>
            </div>
            <div className="flex-center gap-5 relative">
              <div className="text-[14px] flex-center gap-1">
                Aloqa markazi :
                <Link href={`tel:${PhoneNumber.original_number}`}>
                  <h5 className="text-[15px] font-semibold hover:text-red-500 transition-all duration-300">
                    {PhoneNumber.public_number}
                  </h5>
                </Link>
              </div>

              <button
                className="flex-center text-[14px] gap-1 w-24"
                onMouseEnter={() => handleOpenModal(true)}
              >
                <Image
                  src={lang === "uz" ? UzFlagIcon : RuFlagIcon}
                  alt="Flag Icon"
                  width={18}
                  height={18}
                />
                {lang === "uz" ? "O'zbekcha" : "Русский"}
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
                className="bg-red-500 h-[43px] px-3 rounded text-white flex-y-center gap-2"
                onClick={handleOpenCatalog}
              >
                <span>Katalog</span>
                {isOpenCatalog ? <CloseIcon /> : <MenuIcon />}
              </button>
              <SearchProduct />
            </div>
            <div className="flex justify-end items-center w-1/4 gap-4 text-[12px] font-semibold">
              {/* <Link href={`/cabinet/orders`}> */}
              <button
                className="hover:bg-[#f7f7f7] py-0.5 w-14 rounded flex-center flex-col"
                onClick={handleCloseModal}
              >
                <UserIcon />
                <span>Kirish</span>
              </button>
              {/* </Link> */}
              <Link href={"/cabinet/favorites"}>
                <button className="hover:bg-[#f7f7f7] py-0.5 w-14 rounded flex-center flex-col">
                  <HeartIcon />
                  <span>Saralangan</span>
                </button>
              </Link>
              <Link href={"/cabinet/cart"}>
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
          <NavLinks />
        </div>
      </header>
    </>
  );
}
