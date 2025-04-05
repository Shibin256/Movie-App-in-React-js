import React from "react";
import '../css/MovieCard.css'
import heart_icon from '../assets/heart-icon2.png'
import { useMovieContext } from "../Context/MovieContext";



function MovieCard({movie}){

    const {isFavorites, removeFavorites, addToFavorites} = useMovieContext()
    const favorite= isFavorites(movie.id)
    function onFavoriteClick(e){                        {/* checking to add or remove fav */}
        e.preventDefault()
        if(favorite) removeFavorites(movie.id)
        else addToFavorites(movie)
        
    }

    return <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}> <img src={heart_icon} alt="Favorite" className="favorite-icon" /></button>                                        {/* changing color of button */}
                </div>
            </div>

            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
    </div>
}

export default MovieCard 