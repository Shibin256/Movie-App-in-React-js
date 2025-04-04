import MovieCard from "../Component/MovieCard"
import { useState, useEffect } from "react"
import '../css/Home.css'
import { searchMovies, getPopularMovie } from "../services/api"


function Home(){
    const [searchQuery,setSearchQuery]=useState('')
    
    const [movies, setMovies]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
            const loadPopularMovie=async ()=>{
                try{
                    const popularMovie= await getPopularMovie()
                    setMovies(popularMovie)
                }catch (err){ 
                    console.log(err)
                    setError("Faild to load the movies")
                 }
                finally{                   //to store loading data
                        setLoading(false)
                }   
            }
            loadPopularMovie()
    },[])





    const handleSearch=(e)=>{
            e.preventDefault()
            alert(searchQuery)
            setSearchQuery('-----------')           // we called and updatee the state so ---- will show on the input
    }


    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="search for movie..." 
            className="search-input" 
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}          //updadting usestate 
            />
            <button type="submit" className="search-button">search</button>
        </form>



        <div className="movies-grid">
            {movies.map((movie) => 
                    //   movie.title.toLocaleLowerCase().startsWith(searchQuery) && 


              <MovieCard movie={movie} key={movie.id} />
            )}
        </div>
    </div>
    )
}

export default Home