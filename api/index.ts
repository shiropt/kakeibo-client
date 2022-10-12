import axiosClient from "@aspida/axios";
import api from "./api/$api";
import axios from "axios";

/* eslint-disable */
export type Methods = {
  get: {
    status: 200;
  };
};
export const { v1: apiClient } = api(axiosClient(axios, { baseURL: "http://localhost:3000" }));
