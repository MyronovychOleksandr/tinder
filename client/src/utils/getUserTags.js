export const getUserTags = (data, ids) => {
    return data.filter(({value}) => {
        return ids.includes(value)
    })
}