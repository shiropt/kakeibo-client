import { baseURL } from "./../utils/path";
import axios, { Axios } from "axios";
import useSWR from "swr";
import axiosClient from "@aspida/axios";
import api from "../../api/api/$api";
import { useRouter } from "next/router";
import { openContextModal, closeModal } from "@mantine/modals";
import { store } from "../libs/store";
import { useCallback } from "react";

export const useFetchers = () => {
  const { accessToken } = store.user();
  const router = useRouter();
  const axiosConfig = { baseURL, headers: { Authorization: `Bearer ${accessToken}` } };
  const { v1: apiClient } = api(axiosClient(axios, axiosConfig));

  const fetcher = async <T>(url: string) => {
    try {
      const { data } = await axios.get<T>(url, axiosConfig);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        openContextModal({
          innerProps: { modalBody: "再度ログインし直してください" },
          modal: "alert",
          centered: true,
          withCloseButton: false,
          withinPortal: false,
          title: "アクセスの有効期限が切れています",
          onClose: () => router.push("/signin"),
        });
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

  const handlingError = useCallback(async <T>(callBack: Function, action: string, body?: T) => {
    const response = { isError: false, body: {} };
    try {
      const result = await callBack(body);
      response.body = result;
      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        openContextModal({
          innerProps: { modalBody: "不正なデータです" },
          modal: "alert",
          centered: true,
          withCloseButton: false,
          withinPortal: false,
          title: `${action}に失敗しました。`,
          onClose: () => {
            return;
          },
        });
        response.isError = true;
        return response;
      }
      throw Error("サーバーエラーが発生しました。");
    }
  }, []);

  return { useFetch, postData, deleteData, apiClient, handlingError };
};
