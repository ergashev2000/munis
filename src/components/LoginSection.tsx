"use client";

import React, { useState } from "react";
import { LoginModal, RegisterModal } from ".";

export default function LoginSection() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div>
      {isOpenModal ? (
        <RegisterModal setIsOpenModal={setIsOpenModal} />
      ) : (
        <LoginModal setIsOpenModal={setIsOpenModal} />
      )}
    </div>
  );
}
