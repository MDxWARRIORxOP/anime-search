# Anime-Search

An anime search engine that uses various sites to find anime.

## Features

- ### Fast.

#### Scrapes in under 300 milliseconds.

- ### Tiny.

#### 9KB unpacked.

- ### Open Source.

#### Checkout the repo @ https://github.com/MDxWARRIORxOP/anime-search

- ## Free.

#### No charges applied. No API keys required.

## Installation

Install anime-seach with any package manager for node.

```bash
  npm install anime-search
  # or yarn
  yarn add anime-search
```

## Documentation

Check ou the docs @ https://mdxwarriorxop.github.io/anime-search/

## Usage/Examples

```javascript
const animeSearch = require("anime-search");
// or esm
import animeSearch from "anime-search";

animeSearch("naruto").then(console.log);

// or if you want to be platform specific
const { getAnimeFromZoro, getAnimeFromFreak } = require("anime-search");
// or esm
import { getAnimeFromZoro, getAnimeFromFreak } from "anime-seach";

getAnimeFromZoro("sword art online").then(console.log);
// and
getAnimeFromFreak("dragon slayer").then(console.log);

// async example
(async () => {
  const data = await animeSearch("Hunter x Hunter");
  console.log(data);
})();
```

## API Reference

#### Get anime

```js
getAnime();
```

| Parameter     | Type       | Description                        |
| :------------ | :--------- | :--------------------------------- |
| `animeSearch` | `nameLike` | **Required**. Anime name to search |

| Returns    | Type       | Description                                                |
| :--------- | :--------- | :--------------------------------------------------------- |
| `Response` | `Res`      | Includes the name, url, thumbnail and a code.              |
| `Response` | `notFound` | Includes a code and a message when the anime is not found. |

#### Get anime from Zoro

```js
getAnimeFromZoro();
```

| Parameter   | Type       | Description                        |
| :---------- | :--------- | :--------------------------------- |
| `animeName` | `nameLike` | **Required**. Anime name to search |

| Returns    | Type       | Description                                                |
| :--------- | :--------- | :--------------------------------------------------------- |
| `Response` | `Res`      | Includes the name, url, thumbnail and a code.              |
| `Response` | `notFound` | Includes a code and a message when the anime is not found. |

<!-- #### Get anime from Anime Freak

```js
getAnimeFromFreak();
```

| Parameter   | Type       | Description                        |
| :---------- | :--------- | :--------------------------------- |
| `animeName` | `nameLike` | **Required**. Anime name to search |

| Returns    | Type       | Description                                                |
| :--------- | :--------- | :--------------------------------------------------------- |
| `Response` | `Res`      | Includes the name, url, thumbnail and a code.              |
| `Response` | `notFound` | Includes a code and a message when the anime is not found. | -->

## Authors

- [@Kingerious\_](https://www.github.com/MDxWARRIORxOP)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

Open a [pr](https://github.com/MDxWARRIORxOP/anime-search/pulls) if you have a feature request.  
Open an [issue](https://github.com/MDxWARRIORxOP/anime-search/issues) if you encounter any bugs.

Thanks!
