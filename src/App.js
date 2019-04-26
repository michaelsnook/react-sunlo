import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <CardList />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
