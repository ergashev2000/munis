"use client";

import { ArrowRightIcon, MapIcon } from "@/assests/icons/svgicons";
import Link from "next/link";
import React, { useRef, useState } from "react";
import BranchsMap from "./ui/BranchsMap";

export default function Branchs() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [fillColor, setFillColor] = useState("#7c7c7c");

  const handleMouseOver = (id: string) => {
    const pathElement = document.getElementById(id);

    if (pathElement && id) {
      pathElement.style.fill = "red";
      pathElement.style.cursor = "pointer";
      pathElement.style.transition = "all .4s";

      switch (id) {
        case "UZB358":
          const ragionSamarqand = document.getElementById("samarqand");
          if (ragionSamarqand) {
            ragionSamarqand.style.opacity = "1";
          }
          break;
        case "UZB364":
          const ragionFergana = document.getElementById("fergana");
          if (ragionFergana) {
            ragionFergana.style.opacity = "1";
          }
          break;
        default:
          break;
      }
    }
  };

  const handleMouseOut = (id: any) => {
    const pathElement = document.getElementById(id);

    if (pathElement) {
      pathElement.style.fill = "";
    }
  };

  return (
    <section>
      <div className="flex items-center gap-10">
        <div className="map w-1/2">
          <span
            className="fergana"
            onMouseOver={() => handleMouseOver("UZB364")}
            onMouseOut={() => handleMouseOut("UZB364")}
          >
            <MapIcon />
          </span>

          <span
            className="samarqand"
            id="samarqand"
            onMouseOver={() => handleMouseOver("UZB358")}
            onMouseOut={() => handleMouseOut("UZB358")}
          >
            <MapIcon />
          </span>
          <BranchsMap
            svgRef={svgRef}
            handleMouseOver={handleMouseOver}
            handleMouseOut={handleMouseOut}
          />
        </div>
        <div className="bg-white rounded-lg p-5 w-1/2">
          <h4 className="text-lg font-semibold pb-2">Bizning manzillar: </h4>
          <ul className="space-y-2">
            <li className="border border-gray-200 text-[15px] rounded-lg hover:bg-gray-100 transition-all duration-300 group">
              <Link
                href={"https://maps.app.goo.gl/ep42eMN2vidPhGB78"}
                target="_blank"
                className=""
              >
                <div className="flex-between p-2">
                  <h4 className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="red"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-semibold text-red-500">
                      Farg&apos;ona
                    </span>
                    - 37 Al-Fargoniy Street, Fergana 721000
                  </h4>
                  <p className="text-red-500 font-semibold flex-center text-[14px] group-hover:opacity-100 opacity-0 transition-all duration-300">
                    Xaritada ko`rish <ArrowRightIcon color="red" />{" "}
                  </p>
                </div>
              </Link>
            </li>

            <li className="border border-gray-200 text-[15px] rounded-lg hover:bg-gray-100 transition-all duration-300 group">
              <Link
                href={"https://maps.app.goo.gl/76NKTQWFfsJmVjZ7A"}
                target="_blank"
                className=""
              >
                <div className="flex-between p-2">
                  <h4 className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="red"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-map-pin"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-semibold text-red-500">
                      Samarqand
                    </span>
                    - 40 Mirzo Ulug&apos;bek Ko&apos;chasi, Samarqand
                  </h4>
                  <p className="text-red-500 font-semibold flex-center text-[14px] group-hover:opacity-100 opacity-0 transition-all duration-300">
                    Xaritada ko`rish <ArrowRightIcon color="red" />
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
