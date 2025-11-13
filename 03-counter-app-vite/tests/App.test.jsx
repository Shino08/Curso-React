/**
 * @jest-environment jsdom
 */
import { getByTestId, render } from "@testing-library/react";
import {App} from "../src/App";

describe('Pruebas en App.jsx', () => { 

    // test('debe de hacer match con el snapshot', () => { 

    //     const Title = 'hola soy Goku';
    //     const {container} = render(<App title={Title} />);

    //     expect( container ).toMatchSnapshot();
    //  })

    test('debe mostrar el titulo del h1', () => { 

        const Title = 'hola soy Vegeta';
        const {container, getByText} = render(<App title={Title} />);

        expect( getByText(Title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(Title);
        expect( getByTestId('test-tile')).toBeTruthy();
     })

    test('debe mostrar el titulo enviado por props', () => { 

        const Title = 'hola soy Vegeta';
        const {getAllByText} = render(<App title={Title} />);

        expect(getAllByText(Title).length).toBe(1)
     })
 })