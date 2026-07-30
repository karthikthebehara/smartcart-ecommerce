import axios from "axios";

const apiEnvUrl = process.env.REACT_APP_API_URL || "http://localhost:8080/api/";
const baseURL = apiEnvUrl.endsWith('/') ? apiEnvUrl : `${apiEnvUrl}/`;

const axiosClient = axios.create({
  baseURL: baseURL
});

export default axiosClient;
