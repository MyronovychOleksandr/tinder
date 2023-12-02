import instance from "./httpsServer"

export const login = (data) => {
    return instance.post(`/users/login`, data);
}

export const logout = (data) => {
    return instance.post(`/users/logout`);
}