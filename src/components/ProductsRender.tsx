"use client";
import { useEffect } from "react";
import MainCard from "./MainCard";
import { productsdata } from "../../data";
import { getProducts } from "@/utils/api/productsApi";
import { useQuery } from "@tanstack/react-query";

export default function ProductsRender() {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["initial-users"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return "Loading"
  }

  return (
    <div className="grid grid-cols-4 gap-3">
      {data?.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
      {/* {productsdata?.map((item: any) => (
        <MainCard key={item.id} item={item} />
      ))} */}
    </div>
  );
}
