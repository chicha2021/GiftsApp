import { getGifs } from "../../src/utilities/helpers"

describe('Prueba en getGifs', () => {
    test('Debe esperar un arreglo', async () => {
        const gifts = await getGifs('Naruto');
        expect( gifts.length ).toBeGreaterThan(0);
        expect( gifts[0] ).toEqual({
            id : expect.any(String),
            title : expect.any(String),
            url : expect.any(String)
        });
        const gifs = gifts.map(e => e.url.startsWith("http"));
        expect( gifs.length ).toBeGreaterThanOrEqual( 20 );
    });
});