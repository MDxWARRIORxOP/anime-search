const { getAnime } = require("./lib");

getAnime("naruto").then(console.log);

// or if you want to be platform specific
const { getAnimeFromZoro, getAnimeFromFreak } = require("anime-search");

getAnimeFromZoro("sword art online").then(console.log);

getAnimeFromFreak("dragon slayer").then(console.log);

// async example
(async () => {
  const data = await getAnime("Hunter x Hunter");
  console.log(data);
})();

// timed
console.time("timer");
getAnime("One Piece").then(console.timeEnd("timer"));
