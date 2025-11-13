import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Pruebas en 07-deses-arr', () => { 

    test('debe retornar un arreglo', () => { 

        const [letters, numbers] = retornaArreglo()

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof numbers).toEqual('number');
        expect(typeof letters).toEqual('string');
     })
 })