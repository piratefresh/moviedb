import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchGenresRequest,
  fetchMoviesCategorieRequest,
  fetchMoviesPopularRequest,
  fetchMoviesRequest,
  fetchMoviesTopRatedRequest
} from "../actions/movieActions";
// Components
import Search from "../components/Search";
import Dropdown from "../components/nav/Dropdown";
// Styled
import styled from "styled-components";

const Nav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  background: #2b2b2b;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
`;
const Navcontent = styled.div`
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  > h2 {
    padding: 0;
    margin: 0;
    color: #7d48df;
    font-family: "Poppins", sans-serif;
  }
  @media (max-width: 1000px) {
    margin: 0;
  }}
  @media (max-width: 600px) {
    height: 100%;
    font-size: 0.8rem;
    h2 {
      width: 60px;
    }
  }}
`;
const NavUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  @media (max-width: 600px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;
const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-transform: uppercase;
  text-decoration: none;
  color: #fbfbfb;
  position: relative;
  /* NavBar Icon */
  h2 {
    font-family: "Poppins";
  }
  @media (max-width: 600px) {
    padding: 5% 0;
    font-size: 0.6rem;
    /* NavBar Icon */
    h2 {
      padding-left: 5%;
    }
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchToggled: false,
      genre: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
  }
  componentDidMount() {
    this.props.fetchGenresRequest();
  }
  onSubmit() {
    const { genres } = this.props.genres;
    const selectedGenre = genres.find(genre => genre.name === this.state.genre);
  }
  toggleSelected(id, name) {
    const { genres } = this.props.genres;
    this.setState({
      genre: name
    });

    const selectedGenre = genres.find(genre => genre.name === name);
    const genreId = selectedGenre.id;
    /* this.props.fetchMoviesCategorieRequest(genreId); */
    this.props.history.push(`/categories/${genreId}`);
  }
  render() {
    const { genres } = this.props.genres;
    const { history } = this.props;

    return (
      <Nav>
        <Navcontent>
          <NavUl>
            <NavLink href="/">New</NavLink>
            <NavLink href="/popular">Popular</NavLink>
            <Dropdown
              title="Categories"
              list={genres}
              toggleItem={this.toggleSelected}
            />
            <NavLink href={"/toprated"}>Top Rated</NavLink>
          </NavUl>
          <Search />
        </Navcontent>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.client.genres
});

export default connect(
  mapStateToProps,
  {
    fetchGenresRequest,
    fetchMoviesCategorieRequest,
    fetchMoviesPopularRequest,
    fetchMoviesRequest,
    fetchMoviesTopRatedRequest
  }
)(withRouter(Navigation));
