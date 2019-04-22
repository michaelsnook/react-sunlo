import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Settings from './Settings';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Favorites?api_key=' + Settings.API_KEY)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ movies: data.records })
      }).catch(err => {
        // Error 🙁
      });
  }

  render() {
    return(
      <div className="container py-5">
        <h2>Movies</h2>
        <div className="row">
          {this.state.movies.map(movie => <MovieCard key={movie.id} {...movie.fields} /> )}
        </div>
      </div>
    );
  }
}

export default MovieList;

