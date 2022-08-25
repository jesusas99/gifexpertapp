import { GifItem } from "../src/components/GifItem";
import { render, screen } from "@testing-library/react"
describe('Pruebas sobre el componente <GifItem />', () => { 
    const title = 'Saitama';
    const url = "https://google.com/"
    test('Prueba snapshot', () => { 
        const { container } = render( <GifItem title = { title }  url= { url } /> );
        expect( container ).toMatchSnapshot();
     })

     test('debe mostrar la imagen con el url y alt indicado', () => { 
        render( <GifItem title = { title }  url= { url } /> );
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        //FORMA MAS LIMPIA

        const { src, alt } = screen.getByRole('img');

        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    })

    //PRUEBA NO APLICABLE A MI VERSION, REMOVI EL TITULO DEL COMPONENTE
    // test('debe de mostrar el titulo en el componente', () => { 
    //     render( <GifItem title = { title }  url = { url } /> );
    //     expect( screen.getByText( title ) ).toBeTruthy();
    //  })
 })