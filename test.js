const { getAnimeFromZoro, getAnimeFromFreak, getAnime } = require("./lib");

getAnime("naruto").then(console.log);

// or if you want to be platform specific

getAnimeFromZoro("sword art online").then(console.log);

// and

getAnimeFromFreak("dragon slayer").then(console.log);

/*
{
  name: 'Naruto',
  url: 'https://zoro.to/naruto-677?ref=search',
  code: 200
}
*/

getAnime("BDHUYUhNXUCHABCYGYGRC").then(console.log);

/*
{ code: 404, message: "Couldn't find the specified Anime" }
*/

// async example
(async () => {
  const data = await getAnime("Hunter x Hunter");
  console.log(data);
})();

// time
console.time("timer");
getAnime("One Piece").then(console.log);
console.timeEnd("timer");
