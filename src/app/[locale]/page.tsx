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
  Branches,
} from "@/components";

const Page = () => {
  const t = useTranslations("Index");

  return (
    <>
      <Hero />
      <Brands />
      <Category />
      <NewProducts />
      <CategoryProducts />
      <Branches />
      <Services />
      <News />
      <Recommended />
    </>
  );
};

export default Page;
