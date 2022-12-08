import { baseURL } from "./../utils/path";
import { useUserStore } from "./../libs/store/user";
import axios, { Axios } from "axios";
import useSWR from "swr";
import axiosClient from "@aspida/axios";
import api from "../../api/api/$api";
import { useRouter } from "next/router";
import { openContextModal, closeModal } from "@mantine/modals";

export const useFetchers = () => {
  const { accessToken } = useUserStore();
  const router = useRouter();
  const axiosConfig = { baseURL, headers: { Authorization: `Bearer ${accessToken}` } };
  const { v1: apiClient } = api(axiosClient(axios, axiosConfig));

  const fetcher = async <T>(url: string) => {
    try {
      const { data } = await axios.get<T>(url, axiosConfig);
      openContextModal({
        innerProps: { modalBody: "再度ログインし直してください" },
        modal: "alert",
        centered: true,
        withCloseButton: false,
        withinPortal: false,
        title: "アクセスの有効期限が切れています",
        onClose: () => router.push("/signin"),
      });
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
      }
      throw new Error();
    }
  };

  const useFetch = <T>(url: string, shouldFetch: boolean = true) => {
    const { data, error, mutate } = useSWR<T>(shouldFetch ? url : null, fetcher);
    return { data, error, isLoading: !error && !data, mutate };
  };

  const postData = async <T, U>(url: string, params: U) => {
    try {
      const { data } = await axios.post<T>(url, params);
      return data;
    } catch (error) {
      throw new Error();
    }
  };
  const deleteData = async (url: string) => {
    try {
      const { data } = await axios.delete(url);
      return data;
    } catch (error) {
      throw new Error();
    }
  };

  return { useFetch, postData, deleteData, apiClient };
};
