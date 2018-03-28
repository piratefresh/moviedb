import React from 'react';
import { fetchMovies } from '../utils/api';
import Loading from './Loading';
 
function MovieGrid ({ movies }) {
    console.log({movies});
    return (
        <div className="movies-list">
            {movies.map(({ title, poster_path, popularity, overview, release_date, id }, index) => (
                <li key={title} className='movie-item'>
                    <ul className='space-list-movies'>
                        <li>
                            <img 
                                src={`http://image.tmdb.org/t/p/original${poster_path}`}
                                alt={`thumbnail for ${title}`}
                                className="mini-poster"
                            />
                        </li>
                        <li>{title}</li>
                        <li>{release_date}</li>
                        <li>{popularity}</li>
                        <li>{overview}</li>
                        <li>{id}</li>
                        {console.log(overview)}
                    </ul>
                </li>
            ))}
        </div>
    )
}
 
class MovieList extends React.Component {
    state = {
        movies: null
    }
    componentDidMount() {
        this.updateMovies();
    }
    updateMovies = async () => {
        const movies = await fetchMovies();
        this.setState(() => ({ movies}))
    }
    render() {
        const { movies } = this.state
        console.log(this.state.movies)
        return(
            <div className="grid">
                {console.log(movies)}
                {!movies
                    ? <Loading />
                    : <MovieGrid movies={movies} />}
            </div>
        )
    }
}
 
export default MovieList;