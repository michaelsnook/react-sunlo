import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieCard from './MovieCard';

class App extends Component {
  render() {
    return (
      <div class="container mt-5">
        <div class="row">
          <div class="col">
            <div className="card-deck">
              <MovieCard />
              <MovieCard />
              <MovieCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
