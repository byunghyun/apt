'use client';

import { GitHubUserItemDataInterface } from '@/api/types';
import GithubUserItem from '@/app/_components/user/GithubUserItem';
import useUserStore from '@/store/useUserStore';
import { Virtuoso } from 'react-virtuoso';

export default function BookmarkModalPage() {
  const { bookmarkUserList, setBookmarkUserList } = useUserStore();
  const handleClickEvents = {
    bookMark: (item: GitHubUserItemDataInterface) => () => {
      const findBookMarkUser = bookmarkUserList.find((bookMarkUser) => {
        return bookMarkUser.id === item.id;
      });
      if (findBookMarkUser) {
        const excludeBookMarkUserList = bookmarkUserList.filter(
          (bookMarkUser) => {
            return bookMarkUser.id !== findBookMarkUser.id;
          },
        );
        setBookmarkUserList(excludeBookMarkUserList);
      } else {
        setBookmarkUserList([...bookmarkUserList, item]);
      }
    },
  };
  return (
    <div className='w-full bg-slate-900 shadow-2xl rounded-3xl overflow-hidden'>
      <div className='overflow-auto'>
        <header className='px-4 sm:px-6 lg:px-8 py-4 '>
          <h2 className=' text-slate-200'>북마크된 사람</h2>
        </header>
        <Virtuoso
          style={{ height: '500px' }}
          totalCount={20}
          data={bookmarkUserList}
          itemContent={(index, item) => {
            return (
              <GithubUserItem
                key={`user_${index}`}
                isBookMark={
                  !!bookmarkUserList.find(
                    (bookMarkUser) => bookMarkUser.id === item.id,
                  )
                }
                onBookMark={handleClickEvents.bookMark}
                {...item}
              />
            );
          }}
        />
      </div>
    </div>
  );
}
