"use client";

import React, { useCallback, useEffect, useState } from "react";

import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";
import { CloseIcon, EyeOffIcon, EyeOnIcon } from "@/assests/icons/svgicons";
import { Button } from ".";

export default function LoginModal({
  setIsOpenModal,
  handleCloseModal,
}: {
  setIsOpenModal: any;
  handleCloseModal: any;
}) {
  const [userPassword, setUserPassword] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");
  const [openPassword, setOpenPassword] = useState<boolean>(false);

  const handleOpenPassword = useCallback(() => {
    setOpenPassword(prev => !prev);
  }, []);

  return (
    <>
      <div className="absolute left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 p-8 pt-8 rounded-lg max-w-sm w-full">
        <button
          className="w-8 h-8 rounded-full active:bg-gray-200 hover:bg-gray-100 flex-center absolute right-5 top-5"
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </button>
        <h1 className="font-semibold text-xl text-center pb-5">Kirish</h1>
        <div className="space-y-5">
          <div className="relative">
            <Input
              country="UZ"
              international
              withCountryCallingCode
              maxLength={17}
              value={phoneValue}
              onChange={setPhoneValue}
              className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
            />
            <label
              htmlFor="phoneId"
              className="text-[14px] absolute bg-white left-2 -top-3 transition-all duration-200 cursor-text text-gray-500"
            >
              Telefon raqami <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="relative">
            <input
              type={openPassword ? "text" : "password"}
              id="passwordId"
              className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
              value={userPassword}
              name="password"
              onChange={(e: any) => setUserPassword(e.target.value)}
            />
            <label
              htmlFor="passwordId"
              className={`text-[16px] text-gray-400 bg-white absolute py-0 left-2 -translate-y-1/2 transition-all duration-200 cursor-text ${
                userPassword
                  ? "top-0"
                  : "peer-focus:top-0 top-1/2 peer-focus:text-[14px]"
              }`}
            >
              Parol <span className="text-red-500">*</span>
            </label>
            <button
              className="right-2 top-1/2 -translate-y-1/2 absolute hover:[&>svg]:stroke-black transition-all duration-500"
              onClick={handleOpenPassword}
            >
              {openPassword ? <EyeOnIcon /> : <EyeOffIcon />}
            </button>
          </div>
          <div>
            <Button className="w-full bg-red-500 text-sm text-white" outline>
              Kirish
            </Button>
          </div>
          <div className="space-y-4 text-[14px] text-center">
            <button className="text-red-500 font-semibold">
              Parolni unutdingizmi?
            </button>
            <p>
              Akkauntingiz yo&apos;qmi?{" "}
              <button
                className="text-red-500 font-semibold"
                onClick={() => setIsOpenModal(true)}
              >
                {" "}
                Ro&apos;yxatdan o&apos;tish
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
