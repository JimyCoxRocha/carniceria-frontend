export interface ApiResponse<T>{
    typeError: string,
    message: string[],
    data: T
}

export interface ErrorApiResponse{
    headers: {
        normalizedNames: object,
        lazyUpdate: null
    },
    status: number,
    statusText: string,
    url: string,
    ok: boolean,
    name: string,
    message: string,
    error: {
        typeError: string,
        message: string[],
        data: undefined
    }
}