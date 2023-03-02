import { render, screen } from "@testing-library/react";
import { addCategory } from "../src/GiftApp";
import { GiftApp } from "../src/GiftApp";


describe('Prueba en el componente < GiftApp />', () => {
    test('Renderiza el componente en un primer momento', () => { 
        render( <GiftApp />)
        screen.debug()
        expect( screen.getByRole('titulo') );
        expect( screen.getByRole('form') ).toBeTruthy();;
        expect( screen.getByRole('div') ).toBeTruthy();
     });

    //  test('Recibe el valor category y la agrega al array de imgs', () => { 
    //     const category = 'Pokemón';
    //     render( <GiftApp />)
        
    //     const result = addCategory( category );
    //     console.log( result )
        

    //     screen.debug()
      
    //  });
});