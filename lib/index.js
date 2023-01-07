#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cheerio_1 = require("cheerio");
var closest_match_1 = require("closest-match");
function getAnimeFromZoro(animeName) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data, $, array, nameArray, closest, e, finalArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = typeof animeName == "function" ? animeName() : animeName;
                    return [4, fetch("https://zoro.to/search?keyword=".concat(name)).then(function (res) { return res.text(); })];
                case 1:
                    data = _a.sent();
                    $ = (0, cheerio_1.load)(data);
                    array = [];
                    return [4, $("#main-content > section > div.tab-content > div > div.film_list-wrap")
                            .find(".flw-item")
                            .each(function (index, elem) {
                            $(elem)
                                .find("a")
                                .each(function (inde, element) {
                                var thumbnailUrl;
                                for (var _i = 0, _a = element.parent.children; _i < _a.length; _i++) {
                                    var child = _a[_i];
                                    if (child.type == "tag" && child.name == "img") {
                                        thumbnailUrl = child.attribs["data-src"];
                                    }
                                }
                                array.push({
                                    name: element.attribs.title,
                                    url: "https://zoro.to" + element.attribs.href,
                                    thumbnail: thumbnailUrl,
                                    code: 200,
                                    platform: "https://zoro.to"
                                });
                            });
                        })];
                case 2:
                    _a.sent();
                    return [4, array.map(function (element) { return element.name; })];
                case 3:
                    nameArray = _a.sent();
                    return [4, (0, closest_match_1.closestMatch)(name, nameArray)];
                case 4:
                    closest = _a.sent();
                    e = array.map(function (element) { return (element.name == closest ? element : false); });
                    finalArray = e.filter(function (e) { return e; });
                    return [2, !finalArray[0]
                            ? { code: 404, message: "Couldn't find the specified Anime" }
                            : finalArray[0]];
            }
        });
    });
}
function getAnimeFromFreak(animeName) {
    return __awaiter(this, void 0, void 0, function () {
        var name, data, $, array, nameArray, closest, e, finalArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = typeof animeName == "function" ? animeName() : animeName;
                    return [4, fetch("https://animefreak.site/search?keyword=".concat(name)).then(function (res) { return res.text(); })];
                case 1:
                    data = _a.sent();
                    $ = (0, cheerio_1.load)(data);
                    array = [];
                    return [4, $("#main-content > section > div.tab-content > div > div.film_list-wrap")
                            .find(".flw-item")
                            .each(function (index, elem) {
                            $(elem)
                                .find("a")
                                .each(function (inde, element) {
                                var thumbnailUrl;
                                for (var _i = 0, _a = element.parent.children; _i < _a.length; _i++) {
                                    var child = _a[_i];
                                    if (child.type == "tag" && child.name == "img") {
                                        thumbnailUrl = child.attribs["data-src"];
                                    }
                                }
                                array.push({
                                    name: element.attribs.title,
                                    url: "https://animefreak.site" + element.attribs.href,
                                    thumbnail: thumbnailUrl,
                                    code: 200,
                                    platform: "https://animefreak.site"
                                });
                            });
                        })];
                case 2:
                    _a.sent();
                    return [4, array.map(function (element) { return element.name; })];
                case 3:
                    nameArray = _a.sent();
                    return [4, (0, closest_match_1.closestMatch)(name, nameArray)];
                case 4:
                    closest = _a.sent();
                    e = array.map(function (element) { return (element.name == closest ? element : false); });
                    finalArray = e.filter(function (e) { return e; });
                    return [2, !finalArray[0]
                            ? { code: 404, message: "Couldn't find the specified Anime" }
                            : finalArray[0]];
            }
        });
    });
}
function animeSearch(animeName, debug) {
    return __awaiter(this, void 0, void 0, function () {
        var name, anime, freakAnime;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = typeof animeName == "function" ? animeName() : animeName;
                    console.log("Scraping anime from https://zoro.to ...");
                    return [4, getAnimeFromZoro(name)];
                case 1:
                    anime = _a.sent();
                    console.log("Scraping complete....");
                    if (!(anime.code == 404)) return [3, 3];
                    console.log("Anime not found... Scraping from https://animefreak.site ...");
                    return [4, getAnimeFromFreak(name)];
                case 2:
                    freakAnime = _a.sent();
                    console.log("Scraping complete....");
                    if (freakAnime.code == 404) {
                        console.log("Anime could not be found, 404.");
                        return [2, { code: 404, message: "Couldn't find the specified Anime" }];
                    }
                    console.log("Anime found!");
                    return [2, freakAnime];
                case 3:
                    console.log("Anime found!");
                    return [2, anime];
            }
        });
    });
}
module.exports = {
    animeSearch: animeSearch,
    getAnimeFromZoro: getAnimeFromZoro,
    getAnimeFromFreak: getAnimeFromFreak
};
//# sourceMappingURL=index.js.map