import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => { 

    const valor = 10;

    test('debe de hacer match con el sanpshot', () => { 
        const { container } = render( <CounterApp value={ valor}/>);
        expect(container).toMatchSnapshot();
     })

     test('debe de mostrar el valor inicial de 100', () => { 
        render( <CounterApp value={ 100 }/>);
        expect( screen.getByText(100)).toBeTruthy();

        // expect( screen.getByRole('heading', {level: 2}).innerHTML).toContain('100');
      })

      test('debe de incrementar en +1', () => { 
        render( <CounterApp value={ valor}/>);
        fireEvent.click(screen.getByText('+1'));
        expect( screen.getByText('11')).toBeTruthy();
       })

      test('debe de incrementar en -1', () => { 
        render( <CounterApp value={ valor}/>);
        fireEvent.click(screen.getByText('-1'));
        expect( screen.getByText('9')).toBeTruthy();
       })

      test('debe de funcionar el boton de reset', () => { 
        render( <CounterApp value={ 100 }/>);
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        expect( screen.getByText(100)).toBeTruthy();
       })
 })