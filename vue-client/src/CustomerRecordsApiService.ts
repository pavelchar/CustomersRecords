import Vue from "vue";
import axios from "axios";

const ajax = axios.create({
  baseURL: "http://localhost:5001/api/Customers",
  // responseType: "json",
  // headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + localStorage.token
  // }
  headers: {
    "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
ajax.interceptors.request.use(
  function(config) {
    if (Vue.prototype.$auth && Vue.prototype.$auth.getAccessToken()) {
      config.headers.common["Authorization"] = "Bearer " + Vue.prototype.$auth.getAccessToken();
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
ajax.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);
export default ajax;
