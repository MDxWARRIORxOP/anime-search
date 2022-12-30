const { getAnimeFromZoro } = require("./index.js");

// naruto
getAnimeFromZoro("naruto").then((data) => console.log(data));

// SAO
getAnimeFromZoro("sword art online").then((data) => console.log(data));

// One Piece
getAnimeFromZoro("One Piece").then((data) => console.log(data));
