import React, { InputHTMLAttributes, useId } from 'react';
import CloseXMark from '../../assets/images/svg/close-x-mark.svg';

interface AptTextInputInterface
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'id'
  > {
  className?: string;
  label?: string;
  postFix?: string | React.ReactNode;
  onResetAll?: () => void;
}

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
        <label htmlFor={id} className='text-slate-400 block mb-2 text-sm'>
          {label}
        </label>
      )}
      <div className={`relative w-full`}>
        <input
          id={id}
          type={'text'}
          className={`text-sm text-slate-200 bg-slate-700 w-full min-h-12 rounded-lg px-5 outline-0 border-1 border-slate-400`}
          style={{
            paddingRight: postFix ? '40px' : '',
          }}
          {...rest}
        />
        {!postFix && rest.value && onResetAll && (
          <button
            className='absolute right-[18px] !z-[3000] position-y-center  text-[14px]'
            onClick={handleClickEvents.resetInputValue}
          >
            <CloseXMark width={24} height={24} />
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
