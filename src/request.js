import axios from "axios";

const request = axios.create({
  baseURL: "http://34.64.230.17:3000/",
});

export default request;