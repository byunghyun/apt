import { toastify } from '@/utils/Toastify';
import { api } from '.';
import {
  AxiosErrorResponse,
  GitHubUserDataInterface,
  SearchUserNameParamInterface,
} from './types';
import axios, { AxiosError } from 'axios';

export const getSearchUserName = async ({
  userName,
  page = 1,
}: SearchUserNameParamInterface) => {
  try {
    const { data }: { data: GitHubUserDataInterface } = await api.get(
      `/search/users?q=${userName}&page=${page}&per_page=20`,
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError<AxiosError<AxiosErrorResponse, any>>(error)) {
      toastify.error(error.message);
      throw new Error(error.message);
    }
  }
};
