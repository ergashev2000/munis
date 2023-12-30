"use client";
import { useEffect } from "react";
import MainCard from "./MainCard";
import { productsdata } from "../../data";

export default function ProductsRender() {
//   const fetchData = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     return data;
//   };

//   useEffect(() => {
//     fetchData();
  //   }, []);
  
  

  return (
    <div className="grid grid-cols-4 gap-3">
      {productsdata?.map((item: any) => (
        <MainCard key={item.id} item={item} />
      ))}
    </div>
  );
}
