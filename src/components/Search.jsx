import React from "react";
import { connect } from "react-redux";
import {
  fetchMovieSearchRequest,
  fetchMoviesRequest
} from "../actions/movieActions";
// styled
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Searchbar = styled.input`
  border-radius: 3px;
  padding: 5px 0;
  width: 150px;
  border: 1px solid rgba(0, 0, 0, 0.43);
  font-size: 16px;
  text-align: center;
`;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    /* Get the query from search input from state */
    const query = this.state.value;
    /* Fetches the movie */
    if (query.length > 0) {
      this.props.fetchMovieSearchRequest({ query });
    } else {
      this.props.fetchMoviesRequest();
    }
  }
  render() {
    return (
      <form className="column" onSubmit={this.handleSubmit}>
        <Searchbar
          id={this.state.value}
          placeholder="Movie name.."
          type="text"
          name="value"
          value={this.state.value}
          autoComplete="off"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.client,
  movies: state.client
});

export default connect(
  mapStateToProps,
  { fetchMovieSearchRequest, fetchMoviesRequest }
)(Search);
