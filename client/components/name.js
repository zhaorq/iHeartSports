import React, { Component } from 'react';
import { connect } from 'react-redux';
import NameModal from './nameModal';
import Modal from './modal';
import { updateName, openModal, closeModal } from './../actions/actions';

/* problem here is how to create the modal component and keep track of the modal window state? 
I considered one way is to create a separate modal component that passes any change of the state to its parent component.
*/
class Name extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    console.log('isModalOpen', this.props.isModalOpen)
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.name,
  isModalOpen: state.modal.name,
});

const mapDispatchToProps = dispatch => ({
  updateName(name) {
    dispatch(updateName(name));
  },
  openModal() {
    dispatch(openModal('name'));
  },
  closeModal() {
    dispatch(closeModal('name'));
  },
});

Name = connect(mapStateToProps, mapDispatchToProps)(Name);
export default Name;
