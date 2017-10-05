import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store.js';

/* this is a new concept that I learnt working on this project*/

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget
    );
  }

  render() {
    return <noscript />;
  }
}

export default Modal;