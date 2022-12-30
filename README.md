# Anime-Search

An anime search engine that uses [zoro](https://zoro.to) to find animes.

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
```

## Usage/Examples

```javascript
const { getAnimeFromZoro } = require("anime-search");
// or esm
import { getAnimeFromZoro } from "anime-search";

getAnimeFromZoro("naruto").then(console.log);

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
```

## API Reference

#### Get anime from zoro

```js
getAnimeFromZoro();
```

| Parameter   | Type     | Description                        |
| :---------- | :------- | :--------------------------------- |
| `animeName` | `string` | **Required**. Anime name to search |

## Future Plans

- Add a thumbnail option.

- Support more websites.

## Authors

- [@Kingerious\_](https://www.github.com/MDxWARRIORxOP)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

Open a [pr](https://github.com/MDxWARRIORxOP/anime-search/pulls) if you have a feature request.  
Open an [issue](https://github.com/MDxWARRIORxOP/anime-search/issues) if you encounter any bugs.

Thanks!
