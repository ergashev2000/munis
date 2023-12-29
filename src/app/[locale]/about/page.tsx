import { ArrowRightIcon } from '@/assests/icons/svgicons';
import Branchs from '@/components/Branchs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Img from '@/assests/images/img2.jpg'

const page = () => {
    return (
      <section className="min-h-screen">
        <div className="pb-7 pt-5 [&>svg]:stroke-black text-sm flex-y-center gap-2 text-gray-400 [&>*:last-child]:text-black">
          <Link href={"/"}>
            <h4>Bosh sahifa</h4>
          </Link>
          <ArrowRightIcon />
          <Link href={"/"}>
            <h4>Kir moshina</h4>
          </Link>
        </div>
        <div className="min-h-[400px] flex gap-10">
          <div className="w-3/4">
            <article>
              <Image
                src={Img}
                alt="Blog image"
                width={300}
                height={200}
                className="max-w-full h-auto"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
                quae dolorem deleniti deserunt iusto minima distinctio quia.
                Doloremque, voluptatum aperiam officia ipsa laborum nihil
                temporibus aliquid explicabo sunt dolorum illo, repellendus
                dolores quam et adipisci veritatis, facilis architecto excepturi
                cupiditate perferendis. Eos dolore odit nostrum repellendus
                exercitationem illum quasi dignissimos porro deleniti temporibus
                iure libero obcaecati distinctio ducimus, sapiente vero ipsa
                autem tenetur sit veniam suscipit minus optio repudiandae.
                Dolorem quas quam enim ad dolorum iste aliquid mollitia non?
                Quaerat quae enim obcaecati facilis fugit omnis corporis aliquam
                            voluptas dicta et voluptates voluptatibus impedit, quibusdam,
                            <br /> <br />
                veritatis repellendus alias ipsum architecto! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Omnis, assumenda
                molestiae natus incidunt nesciunt aperiam inventore. Consequatur
                sunt facere rerum tempora omnis, iste officiis animi officia
                expedita necessitatibus tempore eveniet!
              </p>
            </article>

            <div className='py-10'>
              <h3 className="text-2xl font-semibold text-center py-5">
                Bizning manzillar
              </h3>
              <Branchs className={"flex-col-reverse [&>div]:w-full px-20"} />
            </div>
          </div>
          <aside className="w-1/4 bg-red-200"></aside>
        </div>
      </section>
    );
};

export default page;