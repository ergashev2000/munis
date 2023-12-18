"use client";

import React, { useState } from "react";

export default function TabAboutProduct() {
  const [activeTab, setActiveTab] = useState<string>("aboutProduct");

  const handleTabChange = (tab: string) => setActiveTab(tab);

  return (
    <div className="bg-white p-8 rounded-lg w-3/4 h-auto mb-12 mt-4 min-h-[350px]">
      <div
        className={`flex items-center before:transition-all before:duration-500 text-xl font-semibold mb-6 before:w-1/2  w-max before:h-[1.5px] before:absolute before:bottom-0 before:bg-black relative ${
          activeTab === "features" ? "before:translate-x-full" : ""
        }`}
      >
        <h4 className="w-44 text-center">
          <button
            className={`cursor-pointer ${
              activeTab === "aboutProduct" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleTabChange("aboutProduct")}
          >
            Mahsulot haqida
          </button>
        </h4>
        <h4 className="w-44 text-center">
          <button
            className={`cursor-pointer ${
              activeTab === "features" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleTabChange("features")}
          >
            Xususiyatlari
          </button>
        </h4>
      </div>

      {activeTab === "aboutProduct" && (
        <div>
          <h3 className="font-semibold pb-2">
            LG F2M5HS6S kir yuvish mashinasi
          </h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            distinctio totam accusantium nemo ea, minus recusandae perferendis
            pariatur nulla ipsa magni cumque ipsum veniam repellendus maxime
            quisquam? Non veniam, optio mollitia deleniti tempore unde dolor
            facere consectetur voluptatibus, porro enim nobis nesciunt ipsum
            accusamus id quia, quasi hic. Nulla quae atque quam ad accusamus
            quas accusantium ex explicabo! Veritatis sunt aliquid animi, officia
            molestiae quidem harum! Unde itaque delectus aut eius rem, nulla
            incidunt consequuntur et, aliquid exercitationem iure asperiores
            ducimus dolore! Voluptas aperiam ullam nihil libero soluta maxime
            non consequuntur reiciendis nulla, id hic illum. Laudantium sequi
            fugit maxime!
          </p>
        </div>
      )}
      {activeTab === "features" && (
        <div className="w-1/2">
          <ul className="space-y-2 whitespace-nowrap">
            <li className="text-sm flex-center w-full">
              <div>SKU</div>
              <hr className="w-full mx-2" />
              <div>121341</div>
            </li>
            <li className="text-sm flex-center w-full">
              <div>Og`irligi, kg</div>
              <hr className="w-full mx-2" />
              <div>60 kg</div>
            </li>
            <li className="text-sm flex-center w-full">
              <div>Kir yuvish mashinasining turi</div>
              <hr className="w-full mx-2" />
              <div>avtomatik</div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
