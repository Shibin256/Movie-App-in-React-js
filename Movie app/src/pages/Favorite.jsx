import '../css/Favorites.css'
import { useMovieContext } from '../Context/MovieContext'
import MovieCard from '../Component/MovieCard'


function Favorite(){

    const {favorites} = useMovieContext()

    if(favorites){
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                 <div className="movies-grid">
          {favorites.map((movie) => 
              <MovieCard movie={movie} key={movie.id} />
            )}
        </div>
        </div>)
    }

    return <div className="favorites-empty">
        <h2>This is favorite movie list</h2>
        <p>currently its empty, so add some favorite movies</p>
    </div>
}

export default Favorite