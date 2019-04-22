import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import MovieCard from './MovieCard';
import Navbar from './Navbar';
import Footer from './Footer';
import MovieList from './MovieList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <MovieList />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
