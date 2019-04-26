import React, { Component, Fragment } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Deck from './screens/Deck';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Deck language='Hindi' />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
