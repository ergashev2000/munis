"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeOrderModal } from "../redux/slices/modalsSlices";

import ShoppingModalCallme from "./ShoppingModalCallme";
import ShoppingModalCallToOperator from "./ShoppingModalCallToOperator";

import { CloseIcon } from "@/assests/icons/svgicons";
import useBodyOverflow from "@/hooks/useBodyOverflow";

export default function ShoppingModal() {
  const isModalOpen = useSelector((state: any) => state.modal.isOpenModal);
  const dispatch = useDispatch();

  const modalRef = useRef(null);
  const [handleToggleButton, setHandleToggleButton] = useState<boolean>(false);
  const { hiddenScroll, visibleScroll } = useBodyOverflow();

  const handleCloseModal = useCallback(() => dispatch(closeOrderModal()), []);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target instanceof HTMLElement && e.target.className) {
        const classNames = e.target.className.split(" ");
        if (classNames.includes("order-input")) {
          handleCloseModal();
        }
      }
    };
    document.addEventListener("click", (e: any) => {
      handleClick(e);
    });
    return () => {
      document.removeEventListener("click", (e: any) => {
        handleClick(e);
      });
    };
  }, [handleCloseModal]);

  useEffect(() => {
    if (isModalOpen) {
      hiddenScroll();
    } else {
      visibleScroll();
    }
  }, [isModalOpen]);

  return (
    <div
      className={`left-0 right-0 w-full h-screen bg-black fixed top-0 z-20 bg-opacity-50 order-input ${
        isModalOpen ? "fixed" : "hidden"
      }`}
      ref={modalRef}
    >
      <div className="absolute left-1/2 -translate-x-1/2 bg-white top-1/2 -translate-y-1/2 p-8 pt-4 rounded-lg max-w-sm w-full space-y-8">
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-semibold text-lg">Tezkor xarid</h4>
            <button
              className="w-7 flex-center h-7 rounded-full hover:bg-gray-100"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex items-center justify-between bg-gray-100 gap-1 p-1 rounded-xl">
            <button
              className={`h-10 text-[15px] rounded-lg w-1/2 ${
                !handleToggleButton ? "bg-white" : ""
              }`}
              onClick={() => setHandleToggleButton(false)}
            >
              Men bilan bogʻlaning
            </button>
            <button
              className={`h-10 text-[15px] rounded-lg w-1/2 ${
                handleToggleButton ? "bg-white" : ""
              }`}
              onClick={() => setHandleToggleButton(true)}
            >
              Oʻzim bogʻlanaman
            </button>
          </div>
        </div>

        {handleToggleButton ? (
          <ShoppingModalCallToOperator />
        ) : (
          <ShoppingModalCallme />
        )}
      </div>
    </div>
  );
}
