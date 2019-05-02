import React, { Component } from 'react';

import Settings from '../settings';

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
        let user = data.fields;
        user.image_url = user.pic[0].url;
        this.setState({ user: user })
      }).catch(err => {
        // Error 🙁
      });
  }

  render() {
    return (
      <div className="container p-3">
        <h2>Your profile</h2>
        <div className="row mt-3">
          <div className="col">
            <p className="text-muted mb-0">user name</p>
            <p>{this.state.user.name}</p>
            <p className="text-muted mb-0">email</p>
            <p>{this.state.user.email}</p>
            <p className="text-muted mb-0">active decks</p>
            <p>{this.state.user.decks_active}</p>
            <p className="text-muted mb-0">you speak</p>
            <p>{this.state.user.languages_spoken}</p>
            <p className="text-muted mb-0">profile picture</p>
            { this.state.user.image_url?
            <img src={this.state.user.image_url} alt="" className="rounded img-thumbnail col-4 px-1" />
            :
            <div className="p-2 rounded col-4 text-center bg-secondary">
              <i className="fas fa-user-circle fa-3x text-white"></i>
            </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

