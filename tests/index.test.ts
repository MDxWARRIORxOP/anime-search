import getAnime, { getAnimeFromZoro } from "../src/index"

describe("Testing the getAnime Function.", () => {
    it("should return an object with the type \"Res\".", async () => {
        expect(await getAnime("naruto")).toHaveProperty("name")
        expect(await getAnime(() => "naruto")).toHaveProperty("code")
        expect(await getAnime("naruto")).toHaveProperty("thumbnail")
        expect(await getAnime(() => "naruto")).toHaveProperty("url")
        expect(await getAnime("naruto")).toHaveProperty("platform")
    })

    it("Should return an object with type \"NotFound\"", async () => {
        expect(await getAnime(() => "eeeeeee")).toHaveProperty("code")
        expect(await getAnime("naeeeeeeeeeeeeeruto")).toHaveProperty("message")
    })
})

describe("Testing the getAnimeFromZoro Function.", () => {
    it("should return an object with the type \"Res\".", async () => {
        expect(await getAnimeFromZoro(() => "sword art online")).toHaveProperty("name")
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("code")
        expect(await getAnimeFromZoro(() => "sword art online")).toHaveProperty("thumbnail")
        expect(await getAnimeFromZoro("sword art online")).toHaveProperty("url")
        expect(await getAnimeFromZoro(() => "sword art online")).toHaveProperty("platform")
    })

    it("Should return an object with type \"NotFound\"", async () => {
        expect(await getAnimeFromZoro("nawedwed3deruto")).toHaveProperty("code")
        expect(await getAnimeFromZoro(() => "naruededededdedededto")).toHaveProperty("message")
    })
})