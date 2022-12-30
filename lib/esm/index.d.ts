declare module "anime-search" {
    export function getAnimeFromZoro(animeName: string): {name: string, url: string, thumbnail: string, code: number}
}