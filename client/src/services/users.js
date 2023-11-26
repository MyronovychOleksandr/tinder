import instance from "./httpsServer"

export const getAllUsers = () => {
    return instance.get(`/users`);
}

export const getUserById = (id = "656379b91980a64e43e2a214") => {
    return instance.get(`/users/${id}`);
}

export const createUser = (data) => {
    return instance.post(`/users/create`, data);
}

export const editUser = (data, id = "656379b91980a64e43e2a214", ) => {
    return instance.put(`/users/edit/${id}`, data);
}