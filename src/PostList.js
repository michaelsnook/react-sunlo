import React, { Component } from 'react';
import PostTease from './PostTease';
import Settings from './Settings';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Posts?api_key=' + Settings.API_KEY
        + '&sort%5B0%5D%5Bfield%5D=created_at&sort%5B0%5D%5Bdirection%5D=desc')
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ posts: data.records })
      }).catch(err => {
        // Error 🙁
      });
  }

  render() {
    return(
      <div className="container py-5">
        <h2>Posts</h2>
        {this.state.posts.map(post => <PostTease key={post.id} {...post.fields} /> )}
      </div>
    );
  }
}

export default PostList;

