"use server";

import { db } from "./db";

export async function getProducts() {
  try {
    const data = await db.query.products.findMany({
      with: {
        productsImages: true,
        productsVariants: true,
      },
      orderBy: (products: any, { desc }: any) => [desc(products)],
    });
  } catch (error) {
      console.log(error);
      
  }
}
