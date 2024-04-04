'use client';

import Link from 'next/link';
import { AptHeaderInterface } from './types';

const AptHeader = ({
  headerTitle = 'github user search tool',
}: AptHeaderInterface) => {
  return (
    <header className='sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 -mb-px'>
          <div className='flex'>
            <Link href='/'>
              <h1 className='text-orange-500 '>{headerTitle}</h1>
            </Link>
            <hr className='w-px h-6 bg-slate-200 dark:bg-slate-700 border-none mx-6' />
            <button>
              <Link
                href='/user/bookmark'
                className='text-slate-400 hover:text-slate-300'
              >
                북마크 리스트 보기
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AptHeader;
