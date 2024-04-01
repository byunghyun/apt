'use client';
import AptInput from '@/components/common/AptInput';
import { useCallback, useState } from 'react';

export default function Home() {
  const [searchUserText, setSearchUserText] = useState('');
  const handleChangeEvents = {
    userName: useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchUserText(event.target.value);
    }, []),
  };
  const handleClickEvents = {
    resetSearchUserText: () => {
      setSearchUserText(``);
    },
  };
  return (
    <main className='flex px-4 sm:px-6 lg:px-8'>
      <AptInput
        className='mt-6'
        label={`유저 이름`}
        value={searchUserText}
        onChange={handleChangeEvents.userName}
        onResetAll={handleClickEvents.resetSearchUserText}
      />
    </main>
  );
}
