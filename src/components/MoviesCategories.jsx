import React from "react";
import { connect } from "react-redux";
import {
  fetchMoviesCategorieRequest,
  fetchMoviesHeaderRequest
} from "../actions/movieActions";
// Components
import Loading from "./Loading";
import Hero from "./Hero";
import MovieGrid from "./MovieGrid";
// Styled
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  justify-content: center;
`;

class MovieList extends React.Component {
  state = {
    page: ""
  };
  componentDidMount() {
    console.log(this.props.match.params.genre);
    this.props.fetchMoviesCategorieRequest(this.props.match.params.genre);
    this.props.fetchMoviesHeaderRequest();
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.match.params.genre);
    console.log(this.props.match.params.genre);
    if (prevProps.match.params.genre !== this.props.match.params.genre) {
      this.props.fetchMoviesCategorieRequest(this.props.match.params.genre);
    }
  }

  render() {
    const { movies } = this.props.movies;
    const { header } = this.props.header;

    return (
      <div>
        {!header ? <Loading /> : <Hero header={header} />}
        <div className="movie-filter">
          <Grid>
            {!movies.results ? (
              <Loading />
            ) : (
              <MovieGrid movies={movies.results} />
            )}
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.client,
  header: state.client
});

export default connect(
  mapStateToProps,
  { fetchMoviesCategorieRequest, fetchMoviesHeaderRequest }
)(MovieList);
