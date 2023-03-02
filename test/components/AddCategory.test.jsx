import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente AddCategory', () => {
    test('Debe cambiar el valor del input', () => {
        render(< AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox'); 
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama');
    });

    test('debe llamar onNewCategory al hacer submit', () => {
        const onNewCategory = jest.fn();

        render(< AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 

        fireEvent.input(input, { target: { value: 'Saitama' } });
        
        fireEvent.submit( form );
        expect( input.value ).toBe('');

        // expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( 'Saitama' );
    });

    // test('No debe llamar a addNewCategory si el input esta vacío', () => { 
    //     const onNewCategory = jest.fn();
    //     const inputValue = 'Saitama'
        
    //     render(< AddCategory onNewCategory={ onNewCategory } />);
        
    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form'); 

    //     fireEvent.input(input, { target: { value: 'Saitama' } });
    //     fireEvent.submit( form );
        
    //     if (inputValue === "") {
    //         expect( onNewCategory ).toHaveBeenCalledTimes(0);
    //     }
    //     expect( onNewCategory ).toHaveBeenCalledTimes(1);
    //     expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    //     REVISAR ESTE, NO SÉ SI ESTA DEL TODO BIEN
    //  });

     test('No debe llamar a addNewCategory si el input esta vacío', () => { 
        const onNewCategory = jest.fn();
        render(< AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form'); 

        fireEvent.submit( form );

        // expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
      });
});