import React from "react";

import CustomSwiper from "./CustomSwiper";

const index = () => {
  const data = [
    {
      id: 1,
      name: "islom1",
      img: "https://firebasestorage.googleapis.com/v0/b/kinomen-d3f05.appspot.com/o/media%2Fbanner.webp?alt=media&token=2018d6b4-5f00-4524-b84f-618c3db72feb",
    },
    {
      id: 2,
      name: "islom1",
      img: "https://firebasestorage.googleapis.com/v0/b/kinomen-d3f05.appspot.com/o/media%2F9I3A4F0fqgQeEWZLhqrSUyMXqZhfY0ABAEcake8N.webp?alt=media&token=479b291e-4939-4fb0-bf5a-f7a85ec72f3e",
    },
  ];

  return (
    <section>
      <CustomSwiper
        slidesNumber={1}
        autoplay={8000}
        effect="fade"
        loop
        pagination
      >
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="h-[340px] bg-cover bg-center rounded w-full  bg-no-repeat"
            style={{ backgroundImage: `url(${item?.img})` }}
          />
        ))}
      </CustomSwiper>
    </section>
  );
};

export default index;
