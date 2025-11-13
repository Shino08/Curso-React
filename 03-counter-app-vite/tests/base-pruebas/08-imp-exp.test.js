import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {

    // test('getHeroById debe retornar un heroe por ID', () => { 
    //     const id = 1;
    //     const hero = getHeroeById(id);

    //     expect(hero).toStrictEqual({ id: 1, name: 'Batman', owner: 'DC' })

    //  })
    // test('getHeroById debe retornar undefined', () => { 
    //     const id = 100;
    //     const hero = getHeroeById(id);
    //     expect(hero).toBeFalsy();

    //  })

    test('getHeroesByOwner Debe retornar los heroes mediante el owner', () => {

        const owner = 'DC';

        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        )
    })
    test('getHeroesByOwner Debe retornar los heroes mediante el owner', () => {

        const owner = 'Marvel';

        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toBe(2)
        expect(heroes).toEqual( heroes.filter( (heroe) => heroe.owner === owner ))
    })
})