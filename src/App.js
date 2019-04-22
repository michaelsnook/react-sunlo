import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MovieList from './MovieList';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <PostList />
        <MovieList />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
