import React, { Component } from "react";
import MovieList from "./MovieList";
import MoviesCategories from "./MoviesCategories";
import MoviesPopular from "./MoviesPopular";
import MoviesTopRated from "./MoviesTopRated";
import Movie from "./movie/Movie";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Styled
import styled from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Navigation />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/popular" component={MoviesPopular} />
            <Route
              exact
              path="/categories/:genre"
              component={MoviesCategories}
            />
            <Route exact path="/toprated" component={MoviesTopRated} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route render={() => <p className="text-error">Not Found</p>} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
