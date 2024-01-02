"use client";

import React, { useCallback, useEffect, useState } from "react";
import { LoginModal, RegisterModal } from ".";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginModal } from "@/redux/slices/modalsSlices";
import useBodyOverflow from "@/hooks/useBodyOverflow";

export default function LoginSection() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { hiddenScroll, visibleScroll } = useBodyOverflow();

  const dispatch = useDispatch();
  const isOpenLoginModal = useSelector(
    (state: any) => state.modal.isOpenLoginModal
  );

  const handleCloseModal = useCallback(() => dispatch(closeLoginModal()), []);

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target instanceof HTMLElement && e.target.className) {
        const classNames = e.target.className.split(" ");
        if (classNames.includes("login-box")) {
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
    isOpenLoginModal ? hiddenScroll() : visibleScroll();
  }, [isOpenLoginModal]);

  return (
    <div
      className={`left-0 right-0 w-full h-screen bg-black fixed top-0 z-20 bg-opacity-50 login-box ${
        isOpenLoginModal ? "fixed" : "hidden"
      }`}
    >
      {isOpenModal ? (
        <RegisterModal
          setIsOpenModal={setIsOpenModal}
          handleCloseModal={handleCloseModal}
        />
      ) : (
        <LoginModal
          setIsOpenModal={setIsOpenModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
