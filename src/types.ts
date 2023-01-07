export type nameLike = string | (() => string)
 export type platforms = "https://zoro.to" | "https://animefreak.site"

export interface Res {
    name: string,
    code: number,
    thumbnail: string,
    url: string,
    platform: platforms
}

export interface notFound {
    code: number,
    message: string
}

export interface debug {
    log: boolean,
}