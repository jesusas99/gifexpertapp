import { render, screen } from "@testing-library/react";
import { GifGrid } from "../src/components/GifGrid";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

jest.mock('../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => { 
    const category = 'One punch';
    test('debe de mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        })
        render( <GifGrid category={ category }/>);
        // screen.debug()
        // expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
     })

    //MOck de un custom hook
     test('debe de mostrar el los items cuando se cargan las imagenes useFetchGifs', () => { 
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://google.com/'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://google.com/'
        }]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render( <GifGrid category={ category }/>);
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)
     })
     
 })