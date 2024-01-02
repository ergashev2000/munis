"use client";

import React, { useCallback, useState } from "react";

import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";
import { CloseIcon } from "@/assests/icons/svgicons";
import { Button } from "./";

export default function RegisterModal({ setIsOpenModal }: { setIsOpenModal: any }) {
  const [userRegistorData, setUserRegistorData] = useState({
    fullname: "",
    phone: "",
    password: "",
    resetPassword: "",
  });

  const handleSetData = useCallback((e: any) => {
    const { name, value } = e.target;
    setUserRegistorData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleFillPhone = useCallback((value: any) => {
    setUserRegistorData(prevData => ({
      ...prevData,
      phone: value || "",
    }));
  }, []);

  return (
    <>
      <div className="left-0 fixed right-0 top-0 w-full h-screen bg-black z-20 bg-opacity-50">
        <div className="fixed left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 p-8 pt-10 rounded-lg max-w-sm w-full">
          <button className="w-8 h-8 rounded-full active:bg-gray-200 hover:bg-gray-100 flex-center absolute right-5 top-5">
            <CloseIcon />
          </button>
          <h3 className="font-semibold text-xl text-center pb-5">
            Roʻyxatdan oʻtish
          </h3>
          <div className="space-y-5">
            <div className="relative">
              <input
                type="text"
                id="fullname"
                className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
                value={userRegistorData.fullname}
                name="fullname"
                onChange={handleSetData}
                required
                minLength={3}
              />

              <label
                htmlFor="fullname"
                className={`text-[16px] text-gray-400 bg-white absolute py-0 left-2 -translate-y-1/2 transition-all duration-200 cursor-text ${
                  userRegistorData.fullname
                    ? "top-0"
                    : "peer-focus:top-0 top-1/2 peer-focus:text-[14px]"
                }`}
              >
                Ism va familiya <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <Input
                country="UZ"
                international
                withCountryCallingCode
                maxLength={17}
                minLength={17}
                value={userRegistorData.phone}
                onChange={handleFillPhone}
                className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
              />

              <label
                htmlFor="phoneId"
                className="text-[14px] text-gray-400 absolute bg-white left-2 -top-3 transition-all duration-200 cursor-text"
              >
                Telefon raqami <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="passwordId"
                className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
                value={userRegistorData.password}
                name="password"
                onChange={handleSetData}
                required
                minLength={8}
              />

              <label
                htmlFor="passwordId"
                className={`text-[16px] text-gray-400 bg-white absolute py-0 left-2 -translate-y-1/2 transition-all duration-200 cursor-text ${
                  userRegistorData.password
                    ? "top-0"
                    : "peer-focus:top-0 top-1/2 peer-focus:text-[14px]"
                }`}
              >
                Parol <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="resetPassword"
                className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer"
                value={userRegistorData.resetPassword}
                name="resetPassword"
                onChange={handleSetData}
                required
                minLength={8}
              />

              <label
                htmlFor="checkpassword"
                className={`text-[16px] text-gray-400 bg-white absolute py-0 left-2 -translate-y-1/2 transition-all duration-200 pointer-events-none cursor-text ${
                  userRegistorData.resetPassword
                    ? "top-0"
                    : "peer-focus:top-0 top-1/2 peer-focus:text-[14px]"
                }`}
              >
                Parolni tasdiqlash <span className="text-red-500">*</span>
              </label>
            </div>
            <div>
              <Button className="w-full bg-red-500 text-sm text-white" outline>
                Kirish
              </Button>
            </div>
            <div className=" text-[14px] text-center">
              <p>
                Akkauntingiz bormi?{" "}
                <button
                  className="text-red-500 font-semibold"
                  onClick={() => setIsOpenModal(false)}
                >
                  {" "}
                  Kirish
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
