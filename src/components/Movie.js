import React from 'react';
import { fetchSingleMovie } from '../utils/api';
import Loading from './Loading';
 
/* function MovieInfo({ movie }) {
    return (
        <div className="movie-container">
            {movie.map(({ title, overview, budget, runtime }, index => (
                <h2>{title}</h2>
            )))}
        </div>
    )
} */

function MovieInfo({movie}) {
    return (
        <div className="movie-info">
            <div className="hero-banner">
                <img src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt=""/>
                <div className="movie-top-details">
                    <div className="avatar">
                        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" className="movie-thumb"/>
                    </div>
                    <div className="details">
                        <h2 className="movie-title">{movie.title}</h2>
                        <div className="rating">
                            <div className="voteavg">
                                {movie.vote_average}
                            </div>
                            <div className="vote_count">
                                {movie.vote_count} Votes
                            </div>
                        </div>
                        <p>Runtime: {movie.runtime}</p>
                        <p>Genre: {movie.genres[0].name}</p>
                    </div>
                </div>
            </div>
            <div className="movie-content">
                <div className="movie-overview">
                    <h3>Overview:</h3>
                    <p>{movie.overview}</p>
                </div>
                <div className="movie-photos">
                    <h3>Photos:</h3>
                </div>
                <div className="movie-crew">
                    <h3>Crew: </h3>
                    {movie.credits.crew.slice(0, 6).map((obj) => (
                        !obj.profile_path ?  obj.profile_path = 'http://via.placeholder.com/74x96' : obj.profile_path = `https://image.tmdb.org/t/p/original/${obj.profile_path}`,
                        <li className='card' key={obj.name}>
                            <img src={`${obj.profile_path}`} alt="" className="thumbnail"/>
                            <div className='info-text'>
                                <p>{obj.job} - {obj.name}</p>
                            </div>
                        </li>
                    ))}
                </div>
                <div className="movie-cast">
                    <h3>Cast: </h3>
                    {movie.credits.cast.slice(0, 6).map((obj) => (
                        !obj.profile_path ?  obj.profile_path = 'http://via.placeholder.com/74x96' : obj.profile_path = `https://image.tmdb.org/t/p/original/${obj.profile_path}`,
                        <li className='card' key={obj.name}>
                            <img src={`${obj.profile_path}`} alt="" className="thumbnail"/>
                            <div className='info-text'>
                                {obj.character} - {obj.name}
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}
 
class Movie extends React.Component {
    state = {
        movies: null
    }
    componentDidMount() {
        this.updateMovies();
    }
    updateMovies = async () => {
        const movie = await fetchSingleMovie(this.props.match.params.id);
        this.setState(() => ({ movie }))
    }
    render() {
        const { movie } = this.state
        console.log(this.state.movie)
        return(
            <div className="movie-container">
                {console.log(movie)}
                {!movie
                    ? <Loading />
                    : <MovieInfo movie={movie}  />}
            </div>
        )
    }
}
 
export default Movie;