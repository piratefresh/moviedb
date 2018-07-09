import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./Loading";
import PropTypes from "prop-types";
import { auth } from "../firebase/firebase";
import Delay from "react-delay-render";

class PrivateRoute extends Component {
  render() {
    const { component: Component, isAuthenticated, ...rest } = this.props;
    console.log(isAuthenticated);
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/account/signin",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Delay({ delay: 500 })(PrivateRoute));
