import axios from "axios";

export function axiosInstance() {
  return axios.create({
    baseURL: "http://localhost:3001",
  });
}
