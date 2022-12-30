declare module "anime-search" {
    export interface anime {
        name: string, 
        url: string, 
        thumbnail: string, 
        code: number
    }
        
    export function getAnimeFromZoro(animeName: string): anime

    export function getAnimeFromFreak(animeName: string): anime

    export default function getAnime(animeName: string): anime
}