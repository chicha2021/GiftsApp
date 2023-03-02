import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/UseFetchGifs"


describe('Prueba en el hook useFetch', () => {
    const category = 'Pokemon';

    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => (useFetchGifs(category)));
        const { images, loading } = result.current;

        expect(images.length).toBe(0);
        expect(loading).toBe(true);
    });

    test('Debe regresar el arreglo de  imagenes', async () => {
        const { result } = renderHook(() => (useFetchGifs(category)));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0) //Esperar que se resuelva el hook y luego evaluar el resutado
        );
        const { images, loading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(loading).toBeFalsy();
    });
});