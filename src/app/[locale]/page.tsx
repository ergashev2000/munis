import React from 'react';
import { useTranslations } from 'next-intl';
import { Hero } from '@/components';

const Page = () => {
  const t = useTranslations('Index');

  return (
    <main className='min-h-screen container mx-auto'>
      <Hero/>
    </main>
  );
};

export default Page;
