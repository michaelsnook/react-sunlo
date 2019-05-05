import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './screens/welcome';
import About from './screens/about';
import Profile from './screens/profile';
import Deck from './screens/deck';
import Discover from './screens/discover';
import Browse from './screens/browse';
import Navbar from './components/navbar';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <main className="d-flex">
          <Route exact path="/" component={Welcome} />
          <Route exact path="/profile" render={ () => (
            <Profile uuid="recPcm2lXVMX9GVjF" />
          )} />
          <Route path="/browse/:language" render={({match}) => (
            <Browse language={match.params.language} />
          )} />
          <Route path="/deck/:language" render={({match}) => (
            <Deck language={match.params.language} />
          )} />
          <Route path="/discover/:language" render={({match}) => (
            <Discover language={match.params.language} />
          )} />
          <Route path="/about" component={About} />
        </main>
        <Footer />
      </Router>
    );
  }
}

export default App;
