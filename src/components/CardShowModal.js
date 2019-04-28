import React, { Component } from 'react';
import Modal from './Modal';
import Settings from '../Settings';

class CardShowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: {
        fields: {}
      },
      translations: []
    };
  }

  componentDidMount() {
    fetch(`${Settings.API_URL}Phrases/${this.props.uuid}?api_key=${Settings.API_KEY}`)
      .then((resp) => resp.json())
      .then(data => {
        console.log(data);
        this.setState(state => ({
          phrase: data
        }))
      })
      .catch(err => {
        // Error 🙁
      });
  }

  render() {
    return (
      <Modal title={this.state.phrase.fields.text}
          back_url={this.props.back_url}
          close_text="Close (go back)">
          <div className="modal-header">
            <h3 className="modal-title">
              {this.state.phrase.fields.text}
            </h3>
          </div>
          <div className="modal-body">
            <p>showing card modal {this.props.uuid}</p>
            <p>text: {this.state.phrase.fields.text}</p>
          </div>
      </Modal>
    );
  }
}

export default CardShowModal;
