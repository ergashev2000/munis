import { Button, BuyProductBar, CustomPaths } from "@/components/index";

import {
  NewProducts,
  ProductSwiper,
  SelectMonth,
  TabAboutProduct,
} from "@/components";

export default function Page() {
  return (
    <div className="container mx-auto min-h-screen pb-4">
      <CustomPaths />

      <div className="flex gap-4">
        <div className="bg-white p-8 rounded-lg w-3/4 h-full">
          <h4 className="pb-4 pt-2 px-1.5 text-xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h4>
          <div className="flex gap-8">
            <div className="w-1/2">
              <ProductSwiper />
            </div>
            <div className="w-1/2 space-y-2">
              <h4 className="font-semibold">Mahsulot haqida qisqacha</h4>
              <p className="text-sm font-semibold">
                Brend: <span className="text-red-500">LG</span>
              </p>
              <ul className="space-y-2 whitespace-nowrap">
                <li className="text-[15px] flex-center w-full">
                  <p>SKU</p>
                  <hr className="w-full mx-2" />
                  <p>AD2131231</p>
                </li>
                <li className="text-[15px] flex-center w-full">
                  <div>Og`irligi, kg</div>
                  <hr className="w-full mx-2" />
                  <div>60 kg</div>
                </li>
                <li className="text-[15px] flex-center w-full">
                  <div>Kir yuvish mashinasining turi</div>
                  <hr className="w-full mx-2" />
                  <div>avtomat</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-1/4 space-y-4">
          <BuyProductBar/>
        </div>
      </div>
      <TabAboutProduct />
      <NewProducts />
    </div>
  );
}
