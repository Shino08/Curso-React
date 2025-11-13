import { render, screen } from "@testing-library/react";
import {App} from "../src/App";

describe('Pruebas en App.jsx', () => { 

    const title = 'Hola, soy Goku';

    test('Pruebas en App.jsx', () => { 
        const { container } = render(<App title={title}/>);

        expect(container).toMatchSnapshot();
     })

     test('Debe mostrar el titulo "Hola, soy Goku"', () => { 
        render(<App title={title}/>);
        expect(screen.getByText(title)).toBeTruthy();
      })

      test('Debe mostrar el titulo h1', () => { 
        render(<App title={title}/>);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain();
       })

       test('debe mostrar el titulo enviado por props', () => { 
        render(<App title={title}/>);

        expect( screen.getAllByAltText(title).length).toBe(1);

        })
 })