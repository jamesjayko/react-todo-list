import React, { Component } from "react";
import "../assets/css/modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleConfirm() {
    this.props.callback();

    this.setState({
      visible: false
    });
  }
  render() {
    console.log("modal props: ", this.props);

    const button = (
      <button
        onClick={() => this.setState({ visible: true })}
        className={this.props.className ? this.props.className : "btn"}
      >
        {this.props.children ? this.props.children : "Click me"}
      </button>
    );

    if (this.state.visible) {
      return (
        <span>
          {button}
          <div className="confirm_modal">
            <div className="modal-content">
              <div className="card">
                <div className="card-content">{this.props.text}</div>
                <div className="card-action">
                  <button onClick={this.handleConfirm} className="btn green">
                    confirm
                  </button>
                  <button
                    onClick={() => this.setState({ visible: false })}
                    className="btn red"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </span>
      );
    }
    return button;
  }
}

export default Modal;
