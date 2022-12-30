const { getAnimeFromZoro } = require("./lib/index.js");

// naruto
getAnimeFromZoro("naruto").then(console.log);

// SAO
getAnimeFromZoro("sword art online").then(console.log);

// One Piece
getAnimeFromZoro("One Piece").then(console.log);

// 404 error
getAnimeFromZoro("BDHUYUhNXUCHABCYGYGRC").then(console.log);

// async example
(async () => {
  const data = await getAnimeFromZoro("Hunter x Hunter");
  console.log(data);
})();

// time
console.time("timer");
getAnimeFromZoro("Naruto: Shippuden").then(console.log);
console.timeEnd("timer");
