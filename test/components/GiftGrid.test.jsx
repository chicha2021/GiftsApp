
const { render, screen, getAllByRole } = require("@testing-library/react");
import { GiftGrid } from "../../src/components/GiftGrid";
import { useFetchGifs } from "../../src/hooks/UseFetchGifs";
jest.mock("../../src/hooks/UseFetchGifs")


describe(' Prueba en <GiftGrid /> ', () => {
    const category = "Dragon ball Z"
    
    test('El componente debe devolver el loading, div y category', () => {
        
        useFetchGifs.mockReturnValue({
            images: [],
            loading: true,
        });

        render( <GiftGrid  category={ category } /> )
        expect( screen.getByText( 'Cargando...' ));
        expect( screen.getByText( category ));
        expect( screen.getByRole('div')).toBeTruthy();
    });
    
    
    test('Debe mostrar las img', () => {
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://platform.com.ar'
            },
            {
                id: 'EFG',
                title: 'Goku',
                url: 'http://platform.com.ar'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            loading: false,
        });

        render( <GiftGrid  category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2)
        expect( screen.getAllByRole('div')).toBeTruthy()
        screen.debug();

    })

}); 


