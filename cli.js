#!/usr/bin/env node
const { getAnimeFromZoro } = require("./index.js");

getAnimeFromZoro(process.argv[2]).then((res) => {
  console.log(res);
});
