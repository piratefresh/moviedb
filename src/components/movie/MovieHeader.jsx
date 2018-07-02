import React, { Component } from "react";
import { connect } from "react-redux";
// styled
import styled from "styled-components";

const HeroBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  img {
    object-fit: cover;
    min-width: 100%;
    height: 500px;
    opacity: 0.8;
  }
`;
const MovieTitle = styled.h2`
  font-size: 2rem;
`;
const Overlay = styled.div`
  padding: 20px;
  position: relative;
  height: 100%;
  pointer-events: none;
  opacity: 1;
  color: #000;
  :hover {
    opacity: 1;
    pointer-events: all;
  }
`;
const MovieTopDetails = styled.div`
  display: grid;
  grid-template-columns: fit-content(300px) 250px;
  grid-gap: 30px;
  position: absolute;
  top: 40%;
  left: 24%;
`;
const Avatar = styled.div`
  img {
    height: 300px;
    opacity: 1;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const Details = styled.div`
  color: #fff;
  opacity: 1;
  padding: 0 5px;
  margin: 40px 0;
}
`;
const Rating = styled.div`
  display: flex;
`;
const VoteRating = styled.div`
  background-color: yellow;
  color: #000;
  display: inline-block;
  padding: 0 5px;
`;
const VoteCount = styled.div`
  padding: 0 5px;
`;

class MovieHeader extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <HeroBanner>
          <img
            src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
          <MovieTopDetails>
            <Avatar>
              <img
                src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
                className="movie-thumb"
              />
            </Avatar>
            <Details>
              <MovieTitle>{movie.title}</MovieTitle>
              <Rating>
                <VoteRating>{movie.vote_average}</VoteRating>
                <VoteCount>{movie.vote_count} Votes</VoteCount>
              </Rating>
              <p>Runtime: {movie.runtime}</p>
              <p>Genre: {movie.genres[0].name}</p>
            </Details>
          </MovieTopDetails>
        </HeroBanner>;{" "}
      </div>
    );
  }
}

export default connect()(MovieHeader);
