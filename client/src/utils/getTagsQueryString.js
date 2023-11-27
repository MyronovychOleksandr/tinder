export const getTagsQueryString = (tags) => {
    if(!tags || tags.length <= 0) return ""
    const tagsIds = tags?.map((item) => {
        return item.value
    })
    return tagsIds.join(',')

}