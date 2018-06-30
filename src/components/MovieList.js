import React from 'react';
import { fetchMovies, fetchMovieSearch } from '../utils/api';
import Loading from './Loading';
import Hero from './Hero';
import Search from './Search';
  
function MovieGrid ({ movies }) {
    console.log({movies});
    const overviewLength = 100;
    return (
        <div className="movies-list">
            {movies.map(({ title, poster_path, popularity, overview, release_date, id }, index) => (
                <li key={title} className='movie-item'>
                    <div className='list-movie-card'>
                        <a href={`/movie/${id}`}>
                            <img 
                                src={`http://image.tmdb.org/t/p/original${poster_path}`}
                                alt={`thumbnail for ${title}`}
                                className="mini-poster"
                                to={`movie/${id}`}
                            />
                        </a>
                        <div className="overlay">
                            <h2>{title}</h2>
                            <h3>Release Date: {release_date}</h3>
                            <h3 className='voteavg'>Hype: {popularity.toFixed(2)}</h3>
                            <p>{overview.substring(0, overviewLength)}</p>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    )
}
  
class MovieList extends React.Component {
    state = {
        movies: null,
        movieId: ""
    }
    componentDidMount() {
        if(this.state.movieId === "") {
            this.updateMovies();
        } else {
            this.searchMovies();
        }
        console.log(this.state.movies);
    }
    updateMovies = async () => {
        const movies = await fetchMovies();
        this.setState(() => ({ movies }));
    }
    searchMovies = async (movieId) => {
        this.setState(() => ({ 
            movieId,
            movies: null
         }));
        const movies = await fetchMovieSearch(movieId);
        this.setState(() => ({ movies }));
    }
    render() {
        const { movies } = this.state
        return (
            <div>
                <Hero />
                <div className="movie-filter">
                <Search onSubmitMovie={this.searchMovies} resetSubmit={this.updateMovies}/>
                    <div className="grid">
                        {console.log(movies)}
                        {!movies
                            ? <Loading />
                            : <MovieGrid movies={movies} />}
                    </div>
                </div>
            </div>
        )
    }
}
  
export default MovieList;