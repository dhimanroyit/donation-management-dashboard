import axios from "axios";
import config from "../config/config";

const baseURL = config.serverUrl;

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  async (reqConfig) => {
    const token = JSON.parse(localStorage.getItem("loginUser"));
    reqConfig.headers = {
      Authorization: `${token}`,
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    return reqConfig;
  },
  (error) => Promise.reject(error)
);

// axiosInstance.interceptors.response.use(function (response) {
//     return response;
//   }, function (error) {
//     return Promise.reject(error);
// });

export default axiosInstance;
