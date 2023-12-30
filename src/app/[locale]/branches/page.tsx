import { CustomPaths } from "@/components";
import Branches from "@/components/Branches";
import Image from "next/image";
import React from "react";

import Img from '@/assests/images/XXXL.webp'

export default function Page() {
  return (
    <section>
      <div className="min-h-screen">
        <CustomPaths />
        <h2 className="text-3xl font-semibold text-center pt-5">
          Bizning manzillar
        </h2>
        <Branches />
        <div className="space-y-10 py-5">
          <div className="flex gap-16 flex-row-reverse">
            <div
              className="w-1/2 h-80 rounded-lg group overflow-hidden
            "
            >
              <Image
                src={Img}
                alt="Branchs image"
                width={300}
                height={200}
                className="object-top w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="w-1/2">
              <h4 className="text-2xl text-center font-semibold pb-2">
                Farg&apos;ona viloyati
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, odio! Aspernatur quidem a esse ipsam, asperiores vero
                non iure consectetur aliquam sit quo animi nemo perferendis
                corporis, est fuga quaerat.
              </p>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, odio! Asperaliquam sit quo animi nemo perferendis
                corporis, est fuga quaerat.
              </p>
            </div>
          </div>
          <div className="flex gap-16">
            <div
              className="w-1/2 h-80 rounded-lg group overflow-hidden
            "
            >
              <Image
                src={Img}
                alt="Branchs image"
                width={300}
                height={200}
                className="object-top w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="w-1/2">
              <h4 className="text-2xl text-center font-semibold pb-2">
                Farg&apos;ona viloyati
              </h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, odio! Aspernatur quidem a esse ipsam, asperiores vero
                non iure consectetur aliquam sit quo animi nemo perferendis
                corporis, est fuga quaerat.
              </p>
              <br />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, odio! Asperaliquam sit quo animi nemo perferendis
                corporis, est fuga quaerat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
