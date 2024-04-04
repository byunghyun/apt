'use client';

import { toastify } from '@/utils/Toastify';
import { ErrorComponent } from 'next/dist/client/components/error-boundary';
import { useRouter } from 'next/router';
import React from 'react';

const ErrorRoot: ErrorComponent = (error, reset) => {
  const route = useRouter();
  const handleClickEvents = {
    reset: () => {
      if (reset) {
        reset();
        return;
      }

      toastify.error('reset() 함수가 존재하지 않습니다.');
      route.replace('/');
    },
  };
  return (
    <div className='flex justify-center items-center h-dvh flex-col gap-[25px] px-20'>
      <h2 className='text-slate-300'>에러가 발생하였습니다.</h2>
      {error.error.message && (
        <p className='text-slate-300'>{error.error.message}</p>
      )}
      <button
        className='px-3 py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white'
        onClick={handleClickEvents.reset}
      >
        재시도
      </button>
    </div>
  );
};

export default ErrorRoot;
