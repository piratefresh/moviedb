import React, { Component } from 'react';
import Hero from './Hero';
import MovieList from './MovieList';
import Movie from './Movie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

 
class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Hero />
          <Route exact path='/' component={MovieList} />
          <Route path='/movie' component={Movie} />
        </div>
      </Router>
    );
  }
}
 
export default App;