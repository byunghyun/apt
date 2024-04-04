import { GitHubUserItemDataInterface } from '@/api/types';
import classNames from 'classnames';
import React from 'react';

interface GithubUserItemInterface extends GitHubUserItemDataInterface {
  isBookMark?: boolean;
  onBookMark?: (item: GitHubUserItemDataInterface) => () => void;
}

const GithubUserItem = ({
  onBookMark,
  isBookMark,
  ...item
}: GithubUserItemInterface) => {
  return (
    <div className='flex flex-row py-6 justify-between px-4 sm:px-6 lg:px-8 bg-slate-900'>
      <div className='flex flex-row items-center gap-3'>
        <img
          src={item.avatar_url}
          className='rounded-full w-14 h-14 aspect-auto'
        />
        <p className='text-slate-200'>{item.login}</p>
      </div>
      <button
        className={classNames('px-4 rounded-full', {
          'bg-orange-600 text-orange-200': isBookMark,
          'bg-slate-600 text-slate-200': !isBookMark,
        })}
        onClick={onBookMark && onBookMark(item)}
      >
        <p className='text-sm '>{isBookMark ? '북마크 해제' : '북마크'}</p>
      </button>
    </div>
  );
};

export default GithubUserItem;
