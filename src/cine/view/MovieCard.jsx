import { useState } from "react";
import tag from "../../assets/tag.svg";
import { getImgUrl } from "../../utils/cine-utility";
import MovieRating from "./MovieRating";
import MovieDetails from "./modal/MovieDetails";

export default function MovieCard({ movie }) {
    const [showModal,setShowModal]=useState(false);
    const [selectedMovie,setSelectedMovie]=useState(null);
   const handleModalClose =()=>{
        setSelectedMovie(null);
        setShowModal(false);
   }
    const handleMovieSelection=(movie)=>{
        setSelectedMovie(movie);
        setShowModal(true);
    }
    const handleAddToCart=(event , movie)=>{
        event.stopPropagation();
    }
    return (
        <>
            {showModal&&<MovieDetails 
            movie={selectedMovie}
            onClose={handleModalClose}/>}
            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a href="#" onClick={()=>handleMovieSelection(movie)}>
                <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                <figcaption className="pt-4">
                    <h3 className="text-xl mb-1">{movie.title}</h3>
                    <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                    <MovieRating rating={movie.rating} />
                    <a 
                    onClick={(e)=>handleAddToCart(e,movie)}
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                        href="#">
                        <img src={tag} alt="" />
                        <span>${movie.price} | Add to Cart</span>
                    </a>
                </figcaption>
                </a>
            </figure>
        </>
    )
}
