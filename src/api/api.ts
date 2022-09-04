import axios from "axios";

const { VITE_API_PATH: baseUrl } = import.meta.env;

export function getApi() {
  const token = sessionStorage.getItem("token");

  const api = axios.create({ baseURL: baseUrl });

  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  return api;
}

export const api = getApi();
