import AptHeader from '@/app/_components/common/AptHeader';
import React from 'react';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <AptHeader headerTitle='깃허브 유저 검색기' />
      {children}
    </div>
  );
};

export default HomeLayout;
