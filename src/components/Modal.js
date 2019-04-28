import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';

class Modal extends Component {
  render() {
    return (
      <>
        <div className="modal fade show d-flex" tabIndex="-1" role="dialog" aria-hidden="false">
          <div className="modal-dialog shadow-sm d-flex flex-fill" role="document">
            <div className="modal-content">
              <div className="modal-body">
                {this.props.children}
              </div>
              {this.props.close_text &&
              <div className="modal-footer">
                <Link to={this.props.back_url} role="Button" type="Buton"
                    className="btn btn-secondary btn-block">
                  {this.props.close_text}
                </Link>
              </div>
              }
            </div>
          </div>
        </div>
        <Link to={this.props.back_url}>
          <div className="modal-backdrop fade show"></div>
        </Link>
      </>
    );
  }
}

export default Modal;
