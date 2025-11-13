type Area<T> = {
    [key in keyof T]: T[key]
};

const area: Area<{
    height: string,
    width: number
}> = {
    height: '50',
    width: 50
}