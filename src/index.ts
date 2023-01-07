#!/usr/bin/env node
import { load } from "cheerio";
import { closestMatch } from "closest-match";
import type { nameLike, Res, debug, notFound } from "./types";

/**
 *
 * @param {animeSearch.nameLike} animeName anime to search for
 * @returns {animeSearch.Res} info about the anime
 */
async function getAnimeFromZoro(animeName: nameLike): Promise<Res | notFound> {
  const name = typeof animeName == "function" ? animeName() : animeName;
  const data = await fetch(`https://zoro.to/search?keyword=${name}`).then(
    (res) => res.text()
  );
  const $ = load(data);
  const array: Res[] = [];

  await $(
    "#main-content > section > div.tab-content > div > div.film_list-wrap"
  )
    .find(".flw-item")
    .each((index, elem) => {
      $(elem)
        .find("a")
        .each((inde, element) => {
          let thumbnailUrl;

          for (const child of element.parent.children) {
            if (child.type == "tag" && child.name == "img") {
              thumbnailUrl = child.attribs["data-src"];
            }
          }

          array.push({
            name: element.attribs.title,
            url: "https://zoro.to" + element.attribs.href,
            thumbnail: thumbnailUrl,
            code: 200,
            platform: "https://zoro.to",
          });
        });
    });

  const nameArray = await array.map((element) => element.name);
  const closest = await closestMatch(name, nameArray);
  const e = array.map((element) => (element.name == closest ? element : false));
  const finalArray = e.filter((e) => e);
  return !finalArray[0]
    ? { code: 404, message: "Couldn't find the specified Anime" }
    : finalArray[0];
}

async function getAnimeFromFreak(animeName: nameLike): Promise<Res | notFound> {
  const name = typeof animeName == "function" ? animeName() : animeName;
  const data = await fetch(
    `https://animefreak.site/search?keyword=${name}`
  ).then((res) => res.text());
  const $ = load(data);
  const array: Res[] = [];

  await $(
    "#main-content > section > div.tab-content > div > div.film_list-wrap"
  )
    .find(".flw-item")
    .each((index, elem) => {
      $(elem)
        .find("a")
        .each((inde, element) => {
          let thumbnailUrl;

          for (const child of element.parent.children) {
            if (child.type == "tag" && child.name == "img") {
              thumbnailUrl = child.attribs["data-src"];
            }
          }

          array.push({
            name: element.attribs.title,
            url: "https://animefreak.site" + element.attribs.href,
            thumbnail: thumbnailUrl,
            code: 200,
            platform: "https://animefreak.site",
          });
        });
    });

  const nameArray = await array.map((element) => element.name);
  const closest = await closestMatch(name, nameArray);
  const e = array.map((element) => (element.name == closest ? element : false));
  const finalArray = e.filter((e) => e);
  return !finalArray[0]
    ? { code: 404, message: "Couldn't find the specified Anime" }
    : finalArray[0];
}

async function animeSearch(animeName: nameLike, debug: debug): Promise<Res | notFound> {
  const name = typeof animeName == "function" ? animeName() : animeName;
  console.log("Scraping anime from https://zoro.to ...")
  const anime = await getAnimeFromZoro(name);
  console.log("Scraping complete....");
  

  if (anime.code == 404) {
    console.log("Anime not found... Scraping from https://animefreak.site ...")
    const freakAnime = await getAnimeFromFreak(name);
    console.log("Scraping complete....");

    if (freakAnime.code == 404) {
      console.log("Anime could not be found, 404.")
      return { code: 404, message: "Couldn't find the specified Anime" };
    }
    console.log("Anime found!")

    return freakAnime;
  }

  console.log("Anime found!")
  return anime;
}

module.exports = {
  animeSearch,
  getAnimeFromZoro,
  getAnimeFromFreak,
};
