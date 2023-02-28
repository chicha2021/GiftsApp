const { render, screen } = require("@testing-library/react")
const { GiftCard } = require('../../src/components/GiftCard')

describe('Prueba en GiftCard', () => {

    const title = "Saitama";
    const id = "asda65sd1as5d";
    const url = "https://one-punch.com/saitama.jpg";

    test('Debe matchear con el snapshot', () => {
        const { container } = render(< GiftCard title={title} id={id} url={url} />);
        expect(container).toMatchSnapshot();

        //El snapshot nos deja una fotografía del componente, y en el caso de que algo cambie, el test no va a correr porque no coincide con lo que se 
        //fotografió inicialmente
    });

    test('Debe mostrar la img con el url y el alt correctamente', () => {
        render(< GiftCard title={ title } id={ id } url={ url } />);
        //sreen.debug(); -> para consologuear el render de la img
        //expect( sreen.getByRole('img').src).toBe( url );
        const { src, alt } = screen.getByRole('img');  //Para comprobar que la url y el alt esten en la img
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });

    test('Debe mostrar el title dentro del componente', () => {
        render(< GiftCard title={ title } id={ id } url={ url } />);
        expect( screen.getByText( title )).toBeTruthy(); //Comprobamos que el title exista en el component
    });
});