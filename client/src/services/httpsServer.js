import axios from "axios";
import Cookies from "js-cookie";
import {SERVER_DOMAIN} from "../constants/services";

const headers = {
    "Content-Type": "application/json",
};

const instance = axios.create({
    baseURL: `${SERVER_DOMAIN}/api`,
    headers: headers,
})

instance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;
