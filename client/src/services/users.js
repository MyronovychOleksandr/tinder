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

export const getMatchedUsers = () => {
    return instance.get(`/users/matched`)
}

export const getMe = () => {
    return instance.get(`/users/me`);
}

export const createUser = (data) => {
    return instance.post(`/users/create`, data);
}

export const editUser = (data) => {
    return instance.put(`/users/edit`, data);
}