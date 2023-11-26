import axios from "axios";
import {SERVER_DOMAIN} from "../constants/services";

const headers = {
    "Content-Type": "application/json",
};

const instance = axios.create({
    baseURL: `${SERVER_DOMAIN}/api`,
    headers: headers,
})

export default instance;
