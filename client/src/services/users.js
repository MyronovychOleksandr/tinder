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
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key])) {
            data[key].forEach((value, index) => {
                if (typeof value === 'object' && value !== null) {
                    Object.keys(value).forEach((nestedKey) => {
                        formData.append(`${key}[${index}][${nestedKey}]`, value[nestedKey]);
                    });
                } else {
                    formData.append(`${key}[${index}]`, value);
                }
            });
        } else {
            formData.append(key, data[key]);
        }
    });

    if (data.images) {
        data.images.forEach((image) => {
            formData.append(`images`, image, image.name);
        });
    }

    return instance.post(`/users/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const editUser = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
        if (Array.isArray(data[key])) {
            data[key].forEach((value, index) => {
                if (typeof value === 'object' && value !== null) {
                    Object.keys(value).forEach((nestedKey) => {
                        formData.append(`${key}[${index}][${nestedKey}]`, value[nestedKey]);
                    });
                } else {
                    formData.append(`${key}[${index}]`, value);
                }
            });
        } else {
            formData.append(key, data[key]);
        }
    });

    if (data.images) {
        data.images.forEach((image) => {
            formData.append(`images`, image, image.name);
        });
    }

    return instance.put(`/users/edit`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}

export const likeUser = (likedUserId) => {
    return instance.post(`/users/like`, {
        likedUserId
    })
}