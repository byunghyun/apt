'use client';

import AptModalPopupContainer from '@/app/_components/common/AptModalPopupContainer';
import { useRouter } from 'next/navigation';
import React from 'react';

const BookmarkModalLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const handleClickEvents = {
    goBackHistory: () => {
      router.back();
    },
  };
  return (
    <AptModalPopupContainer
      isShown={true}
      onClose={handleClickEvents.goBackHistory}
    >
      {children}
    </AptModalPopupContainer>
  );
};

export default BookmarkModalLayout;
