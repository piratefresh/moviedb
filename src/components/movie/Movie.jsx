import React from "react";
import { connect } from "react-redux";
import { fetchMovieRequest } from "../../actions/movieActions";
import Loading from "../Loading";
// Components
import MovieHeader from "./MovieHeader";
import MovieBody from "./MovieBody";
// styled
import styled from "styled-components";

class Movie extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchMovieRequest({ id });
  }
  render() {
    const { movie } = this.props.movie;
    console.log(this.props);
    let movieContent;
    if (movie === null) {
      movieContent = <Loading />;
    } else {
      console.log(this.props.movie);
      movieContent = (
        <div>
          <MovieHeader movie={movie} />
          <MovieBody movie={movie} />
        </div>
      );
    }
    return <div className="movie-container">{movieContent}</div>;
  }
}

const mapStateToProps = state => ({
  movie: state.client
});

export default connect(
  mapStateToProps,
  { fetchMovieRequest }
)(Movie);
