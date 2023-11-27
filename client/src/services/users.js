import instance from "./httpsServer"

export const getAllUsers = (params) => {
    const query = {};
    if (params) {
        Object.keys(params).forEach((key) => {
            const value = params[key];
            if (value !== undefined && value !== '') {
                query[key] = value;
            }
        });
    }
    const queryString = new URLSearchParams(query).toString();

    const url = `/users${queryString ? `?${queryString}` : ''}`;

    return instance.get(url);
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