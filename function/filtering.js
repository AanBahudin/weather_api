export const filtering = (data, filter) => {
    const item = Object.keys(data).filter(item => {
        return filter.includes(item)
    }).map(newItem => {
        return newItem
    })
    return item
}