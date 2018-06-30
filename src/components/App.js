import React, { Component } from 'react';
import MovieList from './MovieList';
import Movie from './Movie';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
  
class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={MovieList} />
            <Route path='/movie/:id' component={Movie} />
            <Route render={() => <p className='text-error'>Not Found</p>} />
          </Switch>          
        </div>
      </Router>
    );
  }
}
  
export default App;