import React, { Component } from 'react';
import Modal from './Modal';

class CardShowModal extends Component {
  render() {
    return (
      <Modal title={this.props.title} back_url={this.props.back_url} close_text="Close (go back)">
        <p>showing card modal {this.props.uuid}</p>
      </Modal>
    );
  }
}

export default CardShowModal;
