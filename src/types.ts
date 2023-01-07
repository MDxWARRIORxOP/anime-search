export type nameLike = string | (() => string);
export type platforms = "https://zoro.to" | "https://animefreak.site";

export interface Res {
  name: string;
  code: number;
  thumbnail: string;
  url: string;
  platform: platforms;
}

export interface NotFound {
  code: number;
  message: string;
}
