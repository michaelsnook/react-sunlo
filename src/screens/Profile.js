import React, { Component } from 'react';
import Settings from '../Settings';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    fetch(Settings.API_URL + 'Users/' + this.props.uuid + '/?api_key=' + Settings.API_KEY)
      .then((resp) => resp.json())
      .then(data => {
        this.setState({ phrases: data.records })
      }).catch(err => {
        // Error 🙁
      });
  }

  render() {
    return(
      <div className="container py-5">
        <h2>Your profile</h2>
        <div className="row">

        </div>
      </div>
    );
  }
}

export default Profile;

