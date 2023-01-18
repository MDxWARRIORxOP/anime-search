[![Coverage Status](https://img.shields.io/coverallsCoverage/github/MDxWARRIORxOP/anime-search)](https://coveralls.io/github/MDxWARRIORxOP/anime-search?branch=main)

[![Github Builds](https://img.shields.io/github/actions/workflow/status/MDxWARRIORxOP/anime-search/main.yml)](https://github.com/MDxWARRIORxOP/anime-search/actions/workflows/main.yml)

![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/anime-search)

![Downloads](https://img.shields.io/npm/dw/anime-search)

[![Open Issues](https://img.shields.io/github/issues/MDxWARRIORxOP/anime-search)](https://github.com/MDxWARRIORxOP/anime-search/issues)

[![License](https://img.shields.io/github/license/MDxWARRIORxOP/anime-search)](https://github.com/MDxWARRIORxOP/anime-search/blob/main/LICENSE)

![anime search](https://cdn.discordapp.com/attachments/894260496725835776/1063899048588886207/AS_Logo.png)

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

Check out the docs at https://mdxwarriorxop.github.io/anime-search/

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

## Contributors

- [@Kingerious\_](https://www.github.com/MDxWARRIORxOP) - The API.

- [@ViggoBF](https://twitter.com/viggo_bf) - The logo.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Contributions are always welcome!

Open a [pr](https://github.com/MDxWARRIORxOP/anime-search/pulls) if you have a feature request.  
Open an [issue](https://github.com/MDxWARRIORxOP/anime-search/issues) if you encounter any bugs.

Thanks!
