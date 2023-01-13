import getAnime, { getAnimeFromZoro} from "../src/index"

describe("Testing the getAnime Function.", () => {
    it("should return an object with the type \"Res\".", async () => {
        expect(await getAnime("naruto")).toHaveProperty("name")
        expect(await getAnime("naruto")).toHaveProperty("code")
        expect(await getAnime("naruto")).toHaveProperty("thumbnail")
        expect(await getAnime("naruto")).toHaveProperty("url")
        expect(await getAnime("naruto")).toHaveProperty("platform")
    })

    it("Should return an object with type \"NotFound\"", async () => {
        expect(await getAnime("eeeeeee")).toHaveProperty("code")
        expect(await getAnime("naeeeeeeeeeeeeeruto")).toHaveProperty("message")
    })
})

describe("Testing the getAnimeFromZoro Function.", () => {
    it("should return an object with the type \"Res\".", async () => {
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("name")
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("code")
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("thumbnail")
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("url")
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("platform")
    })

    it("Should return an object with type \"NotFound\"", async () => {
        expect(await getAnimeFromZoro("nawedwed3deruto")).toHaveProperty("code")
        expect(await getAnimeFromZoro("naruededededdedededto")).toHaveProperty("message")
    })
})

// deprecated
// describe("Testing the getAnimeFromFreak Function.", () => {
//     it("should return an object with the type \"Res\".", async () => {
//         expect(await getAnimeFromFreak("one piece")).toHaveProperty("name")
//         expect(await getAnimeFromFreak("one piece")).toHaveProperty("code")
//         expect(await getAnimeFromFreak("one piece")).toHaveProperty("thumbnail")
//         expect(await getAnimeFromFreak("one piece")).toHaveProperty("url")
//         expect(await getAnimeFromFreak("one piece")).toHaveProperty("platform")
//     })

//     it("Should return an object with type \"NotFound\"", async () => {
//         expect(await getAnimeFromFreak("nawedwed3deruto")).toHaveProperty("code")
//         expect(await getAnimeFromFreak("naruededededdedededto")).toHaveProperty("message")
//     })
// })