import Cookies from "js-cookie";
import {redirect} from "react-router-dom";

export const handleAuthentication = (token, updateToken) => {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000);
    Cookies.set('token', token, { expires: expirationDate });
    updateToken(token)
    redirect("/list")
}