/**
 * @remarks Scrapes data from [zoro](https://zoro.to) or [anime freak](https://animefreak.site)
 * @see [zoro](https://zoro.to) and [anime freak](https://animefreak.site)
 */
declare function getAnime(animeName: types.nameLike): types.Res

/**
 * @remarks Scrapes data from [zoro](https://zoro.to)
 * @see [zoro](https://zoro.to)
 */
declare function getAnimeFromZoro(animeName: types.nameLike): types.Res

/**
 * @remarks Scrapes data from [anime freak](https://animefreak.site)
 * @see [anime freak](https://animefreak.site)
 */
declare function getAnimeFromFreak(animeName: types.nameLike): types.Res

declare namespace types {
    type nameLike = string | (() => string)
    type platforms = "https://zoro.to" | "https://animefreak.site"

    interface Res {
        code: number,
        thumbnail: string,
        url: string,
        platform: platforms
    }
}

export default getAnime
export {getAnimeFromZoro, getAnimeFromFreak, types}