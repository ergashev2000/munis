"use client";

import React, { useState } from "react";

import { UserData } from "@/types";
import "react-phone-number-input/style.css";
import Input from "react-phone-number-input/input";
import { CloseIcon } from "@/assests/icons/svgicons";
import { Button } from ".";

export default function LoginModal() {
  const [userPassword, setUserPassword] = useState<string>("");
    const [phoneValue, setPhoneValue] = useState<string | undefined>("");
    

  return (
    <>
      <div className="left-0 right-0 w-full h-screen bg-black absolute z-20 bg-opacity-50">
        <div className="absolute left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 p-8 pt-4 rounded-lg max-w-sm w-full">
          <div className="flex justify-end">
            <button className="w-8 h-8 rounded-full active:bg-gray-200 hover:bg-gray-100 flex-center">
              <CloseIcon />
            </button>
          </div>
          <h1 className="font-semibold text-2xl text-center pb-5">Kirish</h1>
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
                className="text-[16px] absolute bg-white left-2 -top-2 transition-all duration-200 cursor-text"
              >
                Telefon raqami <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                id="passwordId"
                className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
                value={userPassword}
                name="password"
                onChange={(e: any) => setUserPassword(e.target.value)}
              />

              <label
                htmlFor="passwordId"
                className="text-[16px] absolute bg-white left-2 peer-focus:top-0 top-1/2 -translate-y-1/2 transition-all duration-200 cursor-text"
              >
                Parol
              </label>
            </div>
            <div>
              <Button classname="w-full bg-red-500 text-sm text-white" outline>
                Kirish
              </Button>
            </div>
            <div className="space-y-4 text-[14px] text-center">
              <button className="text-red-500">Parolni unutdingizmi?</button>
              <p>
                Akkauntingiz yo&apos;qmi?{" "}
                <button className="text-red-500">
                  {" "}
                  Ro&apos;yxatdan o&apos;tish
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
