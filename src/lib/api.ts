import axios from "axios";

const url = import.meta.env.VITE_BASEAPI;
const auth = import.meta.env.VITE_BEARER;

export const apiQAS = axios.create({
  baseURL: `${url}api/`,
  headers: {
    Authorization: `Bearer ${auth}`,
  },
});
