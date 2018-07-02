import React from "react";
// Styled
import styled from "styled-components";

const MovieListWrapper = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
`;
const MovieListCard = styled.div`
  position: relative;
  height: 700px;
  width: 300px;
  background: #fbfbfb;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  border-radius: 2%;
  img {
    border-top-left-radius: 2%;
    border-top-right-radius: 2%;
    width: 100%;
    height: 450px;
    overflow: hidden;
  }
  h2 {
    color: #555;
    font-weight: bold;
    margin-bottom: 5px;
  }
  h3 {
    color: #555;
    font-weight: bold;
  }
  p {
    font-size: 0.9rem;
  }
`;
const MoveListCardDetails = styled.div`
  padding: 20px;
  position: relative;
  height: 100%;
  pointer-events: none;
  opacity: 1;
  color: #000;
`;

function MovieGrid({ movies }) {
  const overviewLength = 100;

  let movieListContent;
  movieListContent = movies.map(
    ({ title, poster_path, popularity, overview, release_date, id }, index) => (
      <li key={title} className="movie-item">
        <MovieListCard>
          <a href={`/movie/${id}`}>
            <img
              src={`http://image.tmdb.org/t/p/original${poster_path}`}
              alt={`thumbnail for ${title}`}
              className="mini-poster"
              to={`movie/${id}`}
            />
          </a>
          <MoveListCardDetails>
            <h2>{title}</h2>
            <h3>Release Date: {release_date}</h3>
            <h3 className="voteavg">Hype: {popularity.toFixed(0)}</h3>
            <p>{overview.substring(0, overviewLength)}</p>
          </MoveListCardDetails>
        </MovieListCard>
      </li>
    )
  );

  return <MovieListWrapper>{movieListContent}</MovieListWrapper>;
}

export default MovieGrid;
