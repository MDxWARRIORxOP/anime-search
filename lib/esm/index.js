#!/usr/bin/env node
import { load } from "cheerio";
import { closestMatch } from "closest-match";
import fetch from "node-fetch";

/**
 * @param {string} animeName the name of the anime to search for.
 * @returns {{name: string, url: string, code: number}} URL and The Name of The Anime
 * @remarks Scrapes data from [zoro](https://zoro.to).
 * @example
 * ```js
 * getAnime("Naruto").then(console.log).catch(console.error)
 * ```
 */
async function getAnimeFromZoro(animeName) {
  const data = await fetch(`https://zoro.to/search?keyword=${animeName}`).then(
    (res) => res.text()
  );
  // console.log(data);
  const $ = load(data);
  const array = [];

  await $(
    "#main-content > section > div.tab-content > div > div.film_list-wrap"
  )
    .find(".flw-item")
    .each((index, elem) => {
      $(elem)
        .find("a")
        .each((index, element) => {
          array.push({
            name: element.attribs.title,
            url: "https://zoro.to" + element.attribs.href,
            code: 200,
          });
        });
    });

  const nameArray = await array.map((element) => element.name);
  const closest = await closestMatch(animeName, nameArray);
  const e = array.map((element) => (element.name == closest ? element : false));
  const finalArray = e.filter((e) => e);
  return !finalArray[0]
    ? { code: 404, message: "Couldn't find the specified Anime" }
    : finalArray[0];
}

export { getAnimeFromZoro };
