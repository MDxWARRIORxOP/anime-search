#!/usr/bin/env node
import { load } from "cheerio";
import { closestMatch } from "closest-match";
import fetch from "node-fetch";

type NameLike = string | (() => string);
type Platforms = "https://zoro.to" | "https://animefreak.site" | "https://animedao.to/";

interface Res {
  name: string;
  code: number;
  thumbnail: string;
  url: string;
  platform: Platforms;
}

interface NotFound {
  code: number;
  message: string;
}

async function getAnimeFromZoro(animeName: NameLike): Promise<Res | NotFound> {
  const name = typeof animeName === "function" ? animeName() : animeName;
  const data = await fetch(`https://zoro.to/search?keyword=${name}`).then((res) => res.text());
  const $ = load(data);
  const array: Res[] = [];

  $("#main-content > section > div.tab-content > div > div.film_list-wrap")
    .find(".flw-item")
    .each((_index, elem) => {
      $(elem)
        .find("a")
        .each((_inde, element) => {
          let thumbnailUrl: string;

          for (const child of element.parent!.children) {
            if (child.type === "tag" && child.name === "img") {
              thumbnailUrl = child.attribs["data-src"];
            }
          }

          array.push({
            name: element.attribs["title"],
            url: "https://zoro.to" + element.attribs["href"],
            thumbnail: thumbnailUrl!,
            code: 200,
            platform: "https://zoro.to",
          });
        });
    });

  const nameArray = array.map((element) => element.name);
  const closest = closestMatch(name, nameArray);
  const e = array.map((element) => (element.name === closest ? element : false));
  const finalArray = e.filter((el) => el);
  return !finalArray[0] ? { code: 404, message: "Couldn't find the specified Anime" } : finalArray[0];
}

async function getAnimeFromFreak(animeName: NameLike): Promise<Res | NotFound> {
  const name = typeof animeName === "function" ? animeName() : animeName;
  const data = await fetch(`https://animefreak.site/search?keyword=${name}`).then((res) => res.text());
  const $ = load(data);
  const array: Res[] = [];

  $("#main-content > section > div.tab-content > div > div.film_list-wrap")
    .find(".flw-item")
    .each((_index, elem) => {
      $(elem)
        .find("a")
        .each((_inde, element) => {
          let thumbnailUrl;

          for (const child of element.parent!.children) {
            if (child.type === "tag" && child.name === "img") {
              thumbnailUrl = child.attribs["data-src"];
            }
          }

          array.push({
            name: element.attribs["title"],
            url: "https://animefreak.site" + element.attribs["href"],
            thumbnail: thumbnailUrl,
            code: 200,
            platform: "https://animefreak.site",
          });
        });
    });

  const nameArray = array.map((element) => element.name);
  const closest = closestMatch(name, nameArray);
  const e = array.map((element) => (element.name === closest ? element : false));
  const finalArray = e.filter((el) => el);
  return !finalArray[0] ? { code: 404, message: "Couldn't find the specified Anime" } : finalArray[0];
}

async function animeSearch(animeName: NameLike): Promise<Res | NotFound> {
  const name = typeof animeName === "function" ? animeName() : animeName;

  const anime = await getAnimeFromZoro(name);

  if (anime.code === 404) {
    const freakAnime = await getAnimeFromFreak(name);

    if (freakAnime.code === 404) {
      return { code: 404, message: "Couldn't find the specified Anime" };
    }

    return freakAnime;
  }

  return anime;
}

export default animeSearch;
export { getAnimeFromFreak, getAnimeFromZoro, Res, NameLike, NotFound, Platforms };
