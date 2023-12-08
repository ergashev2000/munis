import React from 'react';
import { useTranslations } from 'next-intl';
import { Category, Hero, NewProducts } from '@/components';

const Page = () => {
  const t = useTranslations('Index');

  return (
    <main className='min-h-screen container mx-auto'>
      <Hero />
      <Category />
      <NewProducts/>
    </main>
  );
};

export default Page;
