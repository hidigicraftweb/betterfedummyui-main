import axios from "axios";

const csrfClient = axios.create({
  baseURL: "/",
  withCredentials: true,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

export default csrfClient;
