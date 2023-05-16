import axios from "axios";
import { baseURL } from "@/mock/index.js";

const http = axios.create({
  baseURL,
  timeout: 1000,
});

export default http;
