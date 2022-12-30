const { getAnimeFromZoro, getAnimeFromFreak, getAnime } = require("./lib");
// or esm

getAnimeFromZoro("naruto").then(console.log);

// or

getAnimeFromFreak("naruto").then(console.log);

/*
{
  name: 'Naruto',
  url: 'https://zoro.to/naruto-677?ref=search',
  code: 200
}
*/

getAnimeFromZoro("BDHUYUhNXUCHABCYGYGRC").then(console.log);

/*
{ code: 404, message: "Couldn't find the specified Anime" }
*/

// async example
(async () => {
  const data = await getAnimeFromZoro("Hunter x Hunter");
  console.log(data);
})();

// time
console.time("timer");
getAnimeFromZoro("One Piece").then(console.log);
console.timeEnd("timer");
