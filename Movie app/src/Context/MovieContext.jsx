// this space is act as global so data inside this can access in any context
import { createContext, useState, useContext, useEffect } from "react";

const movieContext = createContext()

export const useMovieContext= () => useContext(movieContext)

export const movieProvider= ({children}) => {                //provides states to any components that wrapped around it
            const [favorites, setFavorites]=useState([])

            useEffect(()=>{
                const storedfavs= localStorage.getItem("favorites")

                if(storedfavs) setFavorites(JSON.parse(storedfavs))
            },[])

            useEffect(()=>{
                    localStorage.setItem(JSON.stringify(favorites))             //anytime local storage change we are updating it
            },[favorites])

            const addToFavorites=(movie)=>{
                setFavorites(prev => [...prev, movie])
            }

            const removeFavorites= (movieId)=>{
                setFavorites(prev => prev.filter(movieId => movie.id != movieId))
            }

            const isFavorites= (movieId) => {
                return favorites.some(movie => movie.id ===movieId )
            }

            const value= {
                favorites,
                addToFavorites,
                removeFavorites,
                isFavorites
            }

            return <movieProvider value={value}>
                {children}
            </movieProvider>
}   