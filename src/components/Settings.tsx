import { DownloadIcon } from "@/assests/icons/svgicons";
import Image from "next/image";
import React from "react";
import SettingsInput from "./ui/SettingsInput";
import Button from "./ui/Button";

export default function Settings() {
  return (
    <div className="space-y-8">
      <div className="p-8 rounded-2xl bg-white ">
        <h3 className="text-xl font-semibold pb-5">Shaxsiy ma&apos;lumotlar</h3>
        <div className="flex justify-center flex-col items-center w-max gap-2">
          <div className="w-max rounded-full border overflow-hidden">
            <label
              htmlFor="profile_img"
              className="cursor-pointer [&>span]:hover:opacity-100 relative"
            >
              <Image
                src={"https://images.uzum.uz/clgolldennt1kt4dlhb0/original.jpg"}
                alt="user profile"
                width={150}
                height={150}
                className="rounded-full object-cover w-[150px] h-[150px] object-top block"
              />
              <span className="absolute transition-all duration-300 top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 opacity-0 w-10 h-10 rounded-full bg-gray-300 bg-opacity-70 flex items-center justify-center">
                <DownloadIcon />
              </span>
            </label>
          </div>

          <label htmlFor="profile_img" className="cursor-pointer">
            <h4 className="text-sm text-center w-max hover:text-red-500 transition-all duration-300">
              O&apos;zgartirish
            </h4>
          </label>
          <input
            type="file"
            accept="image/*"
            id="profile_img"
            className="hidden"
          />
        </div>

        <div className="pt-8 space-y-7">
          <div className="flex items-center gap-8">
            <SettingsInput
              name="lastname"
              type="text"
              placeholder="Familiya"
              value="Ergashev"
            />
            <SettingsInput
              name="firstname"
              type="text"
              placeholder="Ism"
              value={"Islomjon"}
            />
          </div>
          <div className="flex items-center gap-8">
            <SettingsInput
              name="text"
              type="text"
              placeholder="E-mail"
              value=""
            />
            <SettingsInput
              name="phonenumber"
              type="text"
              placeholder="Telefon raqami *"
              value="+998 90 847 47 37"
            />
          </div>
          <Button outline classname="text-sm text-white w-max px-8">
            O`zgarishlarni saqlash
          </Button>
        </div>
      </div>
      <div className="p-8 rounded-2xl bg-white ">
        <h3 className="text-xl font-semibold">
          Parolni o&apos;zgartirish
        </h3>
        <div className="space-y-7 py-4">
          <SettingsInput
            name="oldpassword"
            type="text"
            placeholder="Eski parol"
            value=""
          />
          <SettingsInput
            name="newpassword"
            type="text"
            placeholder=" Parol o'ylab toping"
            value=""
          />
          <SettingsInput
            name="newpasswordcheck"
            type="text"
            placeholder="Parolni tasdiqlang"
            value=""
          />
        </div>
        <Button outline classname="text-sm text-white w-max px-8">
          O`zgarishlarni saqlash
        </Button>
      </div>
    </div>
  );
}
