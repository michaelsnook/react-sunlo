import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  toggleModal = (e) => {
    this.setState(state => ({
      open: !this.state.open
    }));
    this.props.toggleModal();
    e.preventDefault();
  }

  closeModal = () => {
    this.setState(state => ({
      open: false
    }));
    setTimeout(() => {
      this.props.closeModal();
    }, 300);

  }

/*
 *  componentWillMount() {
 *    // manage URL to new unique URL for this item
 *  }
 *
 *  componentWillUnmount() {
 *    // switch location back to previous screen
 *  }
 */

  render() {
    return (
      <>
        <div className={`modal fade d-flex ${this.state.open? 'show': ''}`} tabIndex="-1" role="dialog" aria-hidden={!this.state.open}>
          <div className="modal-dialog shadow-sm d-flex flex-fill" role="document">
            <div className="modal-content">

              {this.props.children}

              <div onClick={this.closeModal} className="modal-footer bg-dark text-white">
                <button  type="Buton"
                    className="btn btn-dark btn-block">
                  {this.props.close_text || 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`modal-backdrop fade ${this.state.open? 'show':''}`}></div>
      </>
    );
  }
}

export default Modal;
