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





    const handleSearch= async (e)=>{
            e.preventDefault()
            if(!searchQuery.trim()) return
            if(loading) return

            setLoading(true)
            try {
                const searchResult=await searchMovies(searchQuery)
                setMovies(searchResult)
                setError(false)
            } catch (error) {
                console.log(error)
                setError("Failed to Search movie")
                
            }finally{
                setLoading(false)
            }
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

        {error && <div className="error-message">{error}</div>}     
        {loading ?(
            <div className="loading">Loading...</div>)
            :(
             <div className="movies-grid">
                    {movies.map((movie) => 
                                          <MovieCard movie={movie} key={movie.id} />
            )}
        </div>)}
    </div>
    )
}

export default Home