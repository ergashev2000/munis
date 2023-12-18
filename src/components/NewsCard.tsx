import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="max-w-md rounded-lg hover:shadow-lg hover:bg-white cursor-pointer transition-all duration-300 p-2 bg-white">
      <Image
        src={"https://fakeimg.pl/440x320/282828/eae0d0/?retina=1"}
        alt="Image"
        width={400}
        height={300}
        className="w-full rounded-lg max-w-md"
      />
      <div className="space-y-2">
        <h4 className="text-sm font-semibold line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h4>
        <i className="text-[14px] text-gray-500 ">20 sentyabr 2023</i>
      </div>
    </div>
  );
};

export default index;
