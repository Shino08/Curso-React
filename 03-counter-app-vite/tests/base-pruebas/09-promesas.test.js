import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas 09-promesas', () => {

    test('getHeroByIdAsync debe retornar un heroe', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(heroe => {

            expect(heroe).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            );
            done();
        })
    })

    test('getHeroByIdAsync debe retornar un error si el heroe no existe', (done) => {
        const id = 100;

        getHeroeByIdAsync(id)
            .then(hero => {
                expect(hero).toBeFalsy();
            })
            .catch(error => {

                expect(error).toBe(`No se pudo encontrar el heroe`)
                
            done();
        })
    })
})