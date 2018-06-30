const apiKey="9983ae98fd65654ca7494dd94103697e";
  
function handleError (error) {
    console.warn(error);
    return null;
}

export async function fetchMovieSearch(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movieId}`)
        .catch(handleError);

    const data = await response.json();

    console.log(data);

    return data.results
}
 
export async function fetchSingleMovie(movie_id) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US&append_to_response=credits`)
    .catch(handleError);
 
    const movie = await response.json();
 
    console.log(movie)
 
    return movie
}
  
export async function fetchMovies() {
    const movieUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&=en-US&page=1&region=US`;
    const response = await fetch(movieUrl)
        .catch(handleError);
      
    const movies = await response.json();
    
    return movies.results;
}