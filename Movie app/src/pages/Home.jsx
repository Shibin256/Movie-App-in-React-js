import MovieCard from "../Component/MovieCard"
import { useState } from "react"
import '../css/Home.css'
function Home(){
    const [searchQuery,setSearchQuery]=useState('')

    const movies=[
        {id:1, title:"Interstellar", release_date:"2010"},
        {id:2, title:"Avengers", release_date:"2013"},
        {id:3, title:"Dune", release_date:"2020"},
    ]

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