'use client';
import { getSearchUserName } from '@/api/user';
import AptInput from '@/app/_components/common/AptInput';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import _ from 'lodash';
import { GitHubUserItemDataInterface } from '@/api/types';
import SearchIcon from '@/assets/images/svg/search-icon.svg';
import GithubUserItem from '@/app/_components/user/GithubUserItem';
import useUserStore from '@/store/useUserStore';
import { toastify } from '@/utils/Toastify';

export default function HomePage() {
  const { bookmarkUserList, setBookmarkUserList } = useUserStore();
  const [pageNumber, setPageNumber] = useState(0);
  const [searchUserText, setSearchUserText] = useState('');
  const [githubUserDataList, setGithubUserDataList] = useState<
    Array<GitHubUserItemDataInterface>
  >([]);

  const {
    data: githubUserData,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['githubUsers'],
    queryFn: async () =>
      await getSearchUserName({ userName: searchUserText, page: pageNumber }),
    retry: false,
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const handleChangeEvents = {
    userName: (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchUserText(event.target.value);
    },
  };
  const handleClickEvents = {
    search: () => {
      if (searchUserText) {
        setGithubUserDataList([]);
        setPageNumber(1);
      } else {
        toastify.error(`검색할 유저 이름을 입력해주세요.`);
      }
    },
    resetSearchUserText: () => {
      setPageNumber(0);
      setSearchUserText(``);
      setGithubUserDataList([]);
    },
    bookMark: (item: GitHubUserItemDataInterface) => () => {
      const cloneBookmarkUserList = _.cloneDeep(bookmarkUserList);
      const findBookMarkUser = cloneBookmarkUserList.find((bookMarkUser) => {
        return bookMarkUser.id === item.id;
      });
      if (findBookMarkUser) {
        const excludeBookMarkUserList = cloneBookmarkUserList.filter(
          (bookMarkUser) => {
            return bookMarkUser.id !== findBookMarkUser.id;
          },
        );
        setBookmarkUserList(excludeBookMarkUserList);
      } else {
        setBookmarkUserList([...cloneBookmarkUserList, item]);
      }
    },
  };

  const loadMore = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const Footer = () => {
    if (isFetching) {
      return (
        <div className='p-4 flex justify-center items-center bg-slate-600 mx-6 rounded-3xl'>
          <p className='text-slate-200'>Loading...</p>
        </div>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    if (pageNumber > 1) {
      refetch();
    }
  }, [pageNumber]);

  useEffect(() => {
    if (pageNumber === 1 && githubUserDataList.length === 0) {
      refetch();
    }
  }, [pageNumber, githubUserDataList]);

  useEffect(() => {
    if (githubUserData?.items && !isFetching) {
      setGithubUserDataList((prevList) => [
        ...prevList,
        ...githubUserData?.items,
      ]);
    }
  }, [githubUserData, isFetching]);

  return (
    <main className='flex flex-col flex-1'>
      <div className='px-4 sm:px-6 lg:px-8'>
        <AptInput
          className='mt-6'
          label={`유저 이름`}
          value={searchUserText}
          onChange={handleChangeEvents.userName}
          onResetAll={handleClickEvents.resetSearchUserText}
          postFix={
            <button
              className='flex items-center'
              onClick={handleClickEvents.search}
            >
              <SearchIcon width={24} height={24} />
            </button>
          }
        />
      </div>
      <div className='w-full flex-1 py-4'>
        <Virtuoso
          style={{ height: 'calc(100vh - 204px)' }}
          totalCount={20}
          data={githubUserDataList}
          endReached={loadMore}
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
          components={{ Footer }}
        />
      </div>
    </main>
  );
}
