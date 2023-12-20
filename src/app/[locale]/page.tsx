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

const Page = () => {
  const t = useTranslations("Index");

  return (
    <main className="min-h-screen">
      <Hero />
      <Brands />
      <Category />
      <NewProducts />
      <CategoryProducts />
      <News />
      <Services />
      <Recommended />
    </main>
  );
};

export default Page;
