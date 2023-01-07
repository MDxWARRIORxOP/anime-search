declare function animeSearch(animeName: animeSearch.nameLike, debug: boolean): animeSearch.Res

declare function getAnimeFromZoro(animeName: animeSearch.nameLike): animeSearch.Res
declare function getAnimeFromFreak(animeName: animeSearch.nameLike): animeSearch.Res

declare namespace animeSearch {

}

export default animeSearch
export {getAnimeFromZoro, getAnimeFromFreak, types}