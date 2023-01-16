#!/usr/bin/env node
import { load } from "cheerio";
import { closestMatch } from "closest-match";
import fetch from "node-fetch";

type NameLike = string | (() => string);

interface Res {
  name: string;
  code: number;
  thumbnail: string;
  url: string;
  platform: "https://zoro.to";
}

interface NotFound {
  code: number;
  message: string;
}

/**
 * @param animeName The name of the anime to find.
 * @returns Info about Anime.
 * @see https://zoro.to
 * @async This is an async function. Use await/promise syntax accordingly.
 * @description Scrapes data from https://zoro.to and returns an object with the type of "Res"
 * @example
 * import { getAnimeFromZoro } from "anime-search";
 *
 * getAnimeFromZoro("naruto").then(console.log)
 */
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

          for (const child of element.parent.children) {
            if (child.type === "tag" && child.name === "img") {
              thumbnailUrl = child.attribs["data-src"];
            }
          }

          array.push({
            name: element.attribs["title"],
            url: "https://zoro.to" + element.attribs["href"],
            thumbnail: thumbnailUrl,
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

/**
 * @param animeName The name of the anime to find.
 * @returns Info about Anime.
 * @see https://zoro.to
 * @async This is an async function. Use await/promise syntax accordingly.
 * @description Scrapes data from https://zoro.to and returns an object with the type of "Res".
 *  @example
 * import getAnime from "anime-search";
 *
 * getAnime("naruto").then(console.log)
 */
async function animeSearch(animeName: NameLike): Promise<Res | NotFound> {
  return await getAnimeFromZoro(typeof animeName === "function" ? animeName() : animeName);
}

export default animeSearch;
export { getAnimeFromZoro, Res, NameLike, NotFound };
