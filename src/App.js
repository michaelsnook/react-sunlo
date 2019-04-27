import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Welcome from './screens/Welcome';
import Profile from './screens/Profile';
import Deck from './screens/Deck';
import Browse from './screens/Browse';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
          <main>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/profile" render={ () => (
              <Profile uuid="recPcm2lXVMX9GVjF" />
            )} />
            <Route path="/deck/:language" render={({match}) => (
              <Deck language={match.params.language} />
            )} />
            <Route path="/browse/:language" render={({match}) => (
              <Browse language={match.params.language} />
            )} />
          </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
