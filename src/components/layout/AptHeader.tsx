'use client';

import { useState } from 'react';

interface AptHeaderInterface {
  headerTitle?: string;
}

const AptHeader = ({
  headerTitle = 'github user search tool',
}: AptHeaderInterface) => {
  return (
    <header className='sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 -mb-px'>
          <div className='flex'>
            <h1 className='text-slate-50 cursor-default'>{headerTitle}</h1>
          </div>

          <div className='flex items-center space-x-3'>
            <div>
              <button
                className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3`}
                onClick={() => {}}
              >
                <p></p>
              </button>
            </div>
            <hr className='w-px h-6 bg-slate-200 dark:bg-slate-700 border-none' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AptHeader;
