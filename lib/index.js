#!/usr/bin/env node

const cheerio = require("cheerio");
const { closestMatch } = require("closest-match");
const { default: fetch } = require("node-fetch");

async function getAnimeFromZoro(animeName) {
  const name = typeof animeName == "function" ? animeName() : animeName;
  const data = await fetch(`https://zoro.to/search?keyword=${name}`).then(
    (res) => res.text()
  );
  const $ = cheerio.load(data);
  const array = [];

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
  const closest = await closestMatch(animeName, nameArray);
  const e = array.map((element) => (element.name == closest ? element : false));
  const finalArray = e.filter((e) => e);
  return !finalArray[0]
    ? { code: 404, message: "Couldn't find the specified Anime" }
    : finalArray[0];
}

async function getAnimeFromFreak(animeName) {
  const name = typeof animeName == "function" ? animeName() : animeName;
  const data = await fetch(
    `https://animefreak.site/search?keyword=${name}`
  ).then((res) => res.text());
  const $ = cheerio.load(data);
  const array = [];

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
  const closest = await closestMatch(animeName, nameArray);
  const e = array.map((element) => (element.name == closest ? element : false));
  const finalArray = e.filter((e) => e);
  return !finalArray[0]
    ? { code: 404, message: "Couldn't find the specified Anime" }
    : finalArray[0];
}

async function getAnime(animeName) {
  const name = typeof animeName == "function" ? animeName() : animeName;
  const anime = getAnimeFromZoro(name);

  if (anime.code == 404) {
    const freakAnime = getAnimeFromFreak(name);

    if (freakAnime.code == 404) {
      return { code: 404, message: "Couldn't find the specified Anime" };
    }

    return freakAnime;
  }

  return anime;
}

module.exports = {
  getAnime,
  getAnimeFromZoro,
  getAnimeFromFreak,
};
