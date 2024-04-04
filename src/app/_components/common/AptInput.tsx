import React, { useId } from 'react';
import CloseXMark from '@/assets/images/svg/close-x-mark.svg';
import classNames from 'classnames';
import { AptTextInputInterface } from './types';

const AptInput = ({
  className,
  label,
  postFix,
  onResetAll,
  ...rest
}: AptTextInputInterface) => {
  const id = useId();
  const handleClickEvents = {
    resetInputValue: () => {
      if (onResetAll) {
        onResetAll();
      }
    },
  };

  return (
    <div className={`flex flex-col w-full ${className && className}`}>
      {label && (
        <label htmlFor={id} className='text-slate-400 block mb-2 text-sm '>
          {label}
        </label>
      )}
      <div className={`relative w-full`}>
        <input
          id={id}
          type={'text'}
          autoComplete='off'
          className={classNames(
            `focus:border-orange-400 focus:border-2 text-sm text-slate-200 bg-slate-700 w-full min-h-12 rounded-3xl px-5 outline-0 border-1 border-slate-400`,
            {
              'pr-[110px]': postFix && onResetAll,
              'pr-[40px]': postFix && !onResetAll,
            },
          )}
          {...rest}
        />
        {rest.value && onResetAll && (
          <button
            className={classNames(
              'absolute position-y-center text-[14px] bg-slate-500 rounded-full p-[2px]',
              {
                'right-[58px]': !!postFix,
                'right-[18px]': !postFix,
              },
            )}
            onClick={handleClickEvents.resetInputValue}
          >
            <CloseXMark width={18} height={18} />
          </button>
        )}
        {postFix && (
          <p className='absolute right-[20px] position-y-center  text-[14px]'>
            {postFix}
          </p>
        )}
      </div>
    </div>
  );
};

export default AptInput;
