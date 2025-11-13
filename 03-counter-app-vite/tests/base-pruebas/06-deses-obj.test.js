import usContext from "../../src/base-pruebas/06-deses-obj.js";

describe('Pruebas en 06-deses-obj', () => { 
    test('Debe retornar un objeto con las propiedades correctas', () => { 
        // 1. Preparación: creamos los datos de entrada
        const clave = 'Ironman';
        const edad = 45;
        
        // 2. Ejecución: llamamos a la función
        const context = usContext({ clave, edad });
        
        // 3. Verificación: comprobamos el resultado
        expect(context).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});