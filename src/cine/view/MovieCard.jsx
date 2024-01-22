import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import tag from "../../assets/tag.svg";
import { MovieContext } from "../../context";
import { getImgUrl } from "../../utils/cine-utility";
import MovieRating from "./MovieRating";
import MovieDetails from "./modal/MovieDetails";

export default function MovieCard({ movie }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { state, dispatch } = useContext(MovieContext);

    const handleAddToCart = (event, movie) => {
        event.stopPropagation();

        const found = state.cartData.find((item) => {
            return item.id === movie.id;
        });

        if (!found) {
            dispatch({
                type: "ADD_TO_CART",
                payload: {
                    ...movie,
                },
            });
            toast.success(`Added  ${movie.title} to Cart !`, {
                position: "top-right",
                autoClose: 2000, 
            });
        } else {
            toast.error(`The movie ${movie.title} has been added to the cart already`, {
                position: "top-right", 
                autoClose: 2000,
            });
        }
    }
    const handleModalClose = () => {
        setSelectedMovie(null);
        setShowModal(false);
    }
    const handleMovieSelection = (movie) => {
        setSelectedMovie(movie);
        setShowModal(true);
    }
    return (
        <>
            {showModal && <MovieDetails
                movie={selectedMovie}
                onClose={handleModalClose} />}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <MovieRating rating={movie.rating} />
                        <button
                            onClick={(e) => handleAddToCart(e, movie)}
                            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        >
                            <img src={tag} alt="" />
                            <span>$ {movie.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
        </>
    )
}
