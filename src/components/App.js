import React, { Component } from "react";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import MovieList from "./MovieList";
import MoviesSearch from "./MoviesSearch";
import MoviesCategories from "./MoviesCategories";
import MoviesPopular from "./MoviesPopular";
import MoviesTopRated from "./MoviesTopRated";
import Movie from "./movie/Movie";
import SignIn from "../components/account/SignIn";
import SignUp from "../components/account/SignUp";
import Dashboard from "../components/dashboard/Dashboard";
import Navigation from "./Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchAuthRequest, fetchLoginRequest } from "../actions/authActions";
import { db } from "../firebase";
import { auth } from "../firebase/firebase";
//Animation
import { AnimatedRoute } from "react-router-transition";
// Styled
import styled from "styled-components";
import FormInputField from "./common/FormInput";
import { call, put } from "redux-saga/effects";

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

class App extends Component {
  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged(user => {
      if (user) {
        db.getUser(user.uid).then(snapshot => {
          this.props.fetchLoginRequest(snapshot.val());
          localStorage.setItem("Token", JSON.stringify(snapshot.val()));
        });
      }
    });
  }
  componentWillUnmount() {
    this.removeListener();
    window.localStorage.removeItem("Token");
  }
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Navigation />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/search/:query" component={MoviesSearch} />
            <Route exact path="/popular" component={MoviesPopular} />
            <Route
              exact
              path="/categories/:genre"
              component={MoviesCategories}
            />
            <Route exact path="/toprated" component={MoviesTopRated} />
            <Route exact path="/movie/:id" component={Movie} />
            {/* Auth Routes */}
            <Route exact path="/account/signin" component={SignIn} />
            <Route exact path="/account/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route render={() => <p className="text-error">Not Found</p>} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { fetchAuthRequest, fetchLoginRequest }
)(App);
