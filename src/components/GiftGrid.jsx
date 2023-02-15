import { useFetchGifs } from "../hooks/UseFetchGifs";
import { GiftCard } from "./GiftCard";


export const GiftGrid = ({ category }) => {

    const { images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                loading && <h2>Cargando...</h2>
            }
            <div className="card-grid">
                {
                    images?.length && images?.map((imagen) => (
                        <GiftCard key={imagen.id} {...imagen} /> //De esta manera se le pasan el resto de props
                    ))
                }
            </div>
        </>
    )
};