import React from "react";

type SettingsInputProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string;
};

export default function SettingsInput({ type, name, placeholder, value }: SettingsInputProps) {
  return (
    <>
      <div className="relative w-1/2">
        <input
          type={type}
          name={name}
          id={name}
          className="border h-10 px-2 rounded-lg focus:outline-none peer text-sm w-full"
          value={value}
        />
        <label
          htmlFor={name}
          className={`text-[14px] absolute bg-white left-2 peer-focus:top-0 top-1/2 -translate-y-1/2 transition-all duration-200 cursor-text ${
            !!value ? "top-[0px]" : ""
          }`}
        >
          {placeholder}
        </label>
      </div>
    </>
  );
}
