# Anime-Search

An anime search engine that uses various sites to find anime.

## Features

- Fast.
- Tiny.
- Instant.
- Javascript.

## Installation

Install anime-seach with any package manager for node.

```bash
  npm install anime-search
  # or yarn
  yarn add anime-search

  # get the latest un-published version
  npm i https://github.com/MDxWARRIORxOP/anime-seach.git
  # or yarn
  yarn add https://github.com/MDxWARRIORxOP/anime-seach.git
```

## Usage/Examples

```javascript
const getAnime = require("anime-search");

// or esm

import getAnime from "anime-search";

getAnime("naruto").then(console.log);

// or if you want to be platform specific
const { getAnimeFromZoro, getAnimeFromFreak } = require("anime-search");

// or esm

import { getAnimeFromZoro, getAnimeFromFreak } from "anime-seach";

getAnimeFromZoro("sword art online").then(console.log);

// and

getAnimeFromFreak("dragon slayer").then(console.log);

// async example
(async () => {
  const data = await getAnime("Hunter x Hunter");
  console.log(data);
})();

// timed
console.time("timer");
getAnime("One Piece").then(console.timeEnd("timer"));
```

## API Reference

#### Get anime

```js
getAnime();
```

| Parameter   | Type     | Description                        |
| :---------- | :------- | :--------------------------------- |
| `animeName` | `string` | **Required**. Anime name to search |

#### Get anime from Zoro

```js
getAnimeFromZoro();
```

| Parameter   | Type     | Description                        |
| :---------- | :------- | :--------------------------------- |
| `animeName` | `string` | **Required**. Anime name to search |

#### Get anime from Anime Freak

```js
getAnimeFromFreak();
```

| Parameter   | Type     | Description                        |
| :---------- | :------- | :--------------------------------- |
| `animeName` | `string` | **Required**. Anime name to search |

## Future Plans

- add a function to give all info about a anime

## Authors

- [@Kingerious\_](https://www.github.com/MDxWARRIORxOP)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

Open a [pr](https://github.com/MDxWARRIORxOP/anime-search/pulls) if you have a feature request.  
Open an [issue](https://github.com/MDxWARRIORxOP/anime-search/issues) if you encounter any bugs.

Thanks!
