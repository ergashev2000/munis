"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/assests/icons/svgicons";
import { useParams, usePathname } from "next/navigation";
import { uuid } from "uuidv4";
import { Fragment, useEffect, useState } from "react";

type TPaths = { id: string; name: string; slug: string };

export default function CustomPaths() {
  const pathname = usePathname();
  const [names, setNames] = useState<Array<TPaths>>([]);

  const filterPathnames = () => {
    let pathNames: Array<TPaths> = [];
    let paths = pathname.split("/").filter(item => item);

    switch (paths[1]) {
      case "branches":
        pathNames.push({
          id: uuid(),
          name: "Bizning manzillar",
          slug: "/branches",
        });
        break;
      case "cabinet":
        switch (paths[2]) {
          case "favorites":
            pathNames.push({
              id: uuid(),
              name: "Saralanganlar",
              slug: "/cabinet/favorites",
            });
            break;
          case "cart":
            pathNames.push({
              id: uuid(),
              name: "Savatcha",
              slug: "/cabinet/cart",
            });
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    setNames(pathNames);
  };

  useEffect(() => {
    filterPathnames();
  }, [pathname]);

  return (
    <>
      <div className="pb-7 pt-5 [&>*:last-child]:text-red-400 [&>svg]:stroke-black text-sm flex-y-center gap-2 text-gray-400 font-semibold">
        <Link href={"/"}>
          <h4>Bosh sahifa</h4>
        </Link>
        {names?.map((item: TPaths) => (
          <Fragment key={item.id}>
            <ArrowRightIcon />
            <Link href={item.slug}>
              <h4>{item.name}</h4>
            </Link>
          </Fragment>
        ))}
      </div>
    </>
  );
}
