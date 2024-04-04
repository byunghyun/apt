import { GitHubUserItemDataInterface } from '@/api/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface UserStore {
  bookmarkUserList: Array<GitHubUserItemDataInterface>;
}
interface UserAction {
  setBookmarkUserList: (
    bookmarkUserList: Array<GitHubUserItemDataInterface>,
  ) => void;
}
const useUserStore = create<UserStore & UserAction>()(
  persist(
    devtools(
      immer((set, get) => ({
        bookmarkUserList: [],
        setBookmarkUserList: (
          bookmarkUserList: Array<GitHubUserItemDataInterface>,
        ) => {
          set((state) => {
            state.bookmarkUserList = bookmarkUserList;
          });
        },
      })),
    ),
    {
      name: 'userStore',
    },
  ),
);

export default useUserStore;
