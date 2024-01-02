import React, { useState } from "react";
import Input from "react-phone-number-input/input";
import { Button } from ".";

export default function ShoppingModalCallme() {
  const [fullname, setFullname] = useState<string>("");
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");

  const handleFullname = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFullname(e.target.value);
  return (
    <div className="space-y-8">
      <div className="relative">
        <input
          type="text"
          id="fullname"
          className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
          name="fullname"
          onChange={handleFullname}
          value={fullname}
        />
        <label
          htmlFor="fullname"
          className="text-[16px] bg-white absolute py-0 left-2  peer-focus:top-0 peer-focus:text-[14px] top-1/2 -translate-y-1/2 transition-all duration-200 cursor-text text-gray-500"
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
          value={phoneValue}
          onChange={setPhoneValue}
          className="outline-none h-10 bg-transparent w-full pl-2 text-sm focus:border-black border rounded peer "
        />
        <label
          htmlFor="phoneId"
          className="text-[16px] absolute bg-white left-2 -top-3 transition-all duration-200 cursor-text text-gray-500"
        >
          Telefon raqami <span className="text-red-500">*</span>
        </label>
      </div>

      <Button className="text-sm text-white" outline>
        Yuborish
      </Button>
    </div>
  );
}
