import axios from "axios";
import useSWR from "swr";
import axiosClient from "@aspida/axios";
// import api from "../../api/$api";
import api from "../../api/api/$api";
export const { v1: apiClient } = api(axiosClient(axios, { baseURL: "http://localhost:3000" }));

const fetcher = async <T>(url: string) => {
  try {
    const { data } = await axios.get<T>(url, { headers: { userId: "1" } });
    return data;
  } catch (error) {
    throw new Error();
  }
};

export const useFetchers = () => {
  const useFetch = <T>(url: string, shouldFetch: boolean = true) => {
    const { data, error } = useSWR<T>(shouldFetch ? url : null, fetcher);
    return { data, error, isLoading: !error && !data };
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

  return { useFetch, postData, deleteData };
};
