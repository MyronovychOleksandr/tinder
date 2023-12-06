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

// export const createUser = (data) => {
//     return instance.post(`/users/create`, data);
// }

export const createUser = (data) => {
    const formData = new FormData();

    // Додаємо текстові дані до formData
    Object.keys(data).forEach((key) => {
        // Якщо значення - масив (як у випадку images або tags), додайте його елементи окремо
        if (Array.isArray(data[key])) {
            data[key].forEach((value, index) => {
                if (typeof value === 'object' && value !== null) {
                    // Якщо значення - об'єкт, наприклад, для поля tags
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

    // Додаємо файли (зображення) до formData
    if (data.images) {
        data.images.forEach((image, index) => {
            formData.append(`images[${index}]`, image, image.name);
        });
    }

    // Використовуємо Axios для відправлення запиту
    return instance.post(`/users/create`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const editUser = (data) => {
    return instance.put(`/users/edit`, data);
}