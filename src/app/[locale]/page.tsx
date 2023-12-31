import React from "react";
import { useTranslations } from "next-intl";

import {
  Brands,
  Category,
  CategoryProducts,
  Hero,
  NewProducts,
  News,
  Recommended,
  Services,
} from "@/components";
import Branchs from "@/components/Branches";

const Page = () => {
  const t = useTranslations("Index");

  return (
    <>
      <Hero />
      <Brands />
      <Category />
      <NewProducts />
      <CategoryProducts />
      <Branchs />
      <Services />
      <News />
      <Recommended />
    </>
  );
};

export default Page;
