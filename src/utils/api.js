const apiKey="9983ae98fd65654ca7494dd94103697e";
 
function handleError (error) {
    console.warn(error);
    return null;
}

async function fetchMovieId(movieid) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${apiKey}&language=en-US`)

    const movie = await response.json();

    // console.log(movie);

    return movie;
}   

export async function fetchSingleMovie() {
   const movies = await fetchMovies();

   const movie = await movies.map((movie, { id }, index) =>
    movie = fetchMovieId(id))

    const results = await Promise.all(players.map(getUserData))

   console.log(movie);
}
 
export async function fetchMovies() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&=en-US&page=1&region=US`)
        .catch(handleError);
     
    const movies = await response.json();
 
    console.log(movies.results[0]);
 
    return movies.results;
}

