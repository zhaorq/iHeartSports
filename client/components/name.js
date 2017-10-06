import React, { Component } from 'react';
import { connect } from 'react-redux';
import NameModal from './nameModal';
import Modal from './modal';
import { updateName, openModal, closeModal } from './../actions/actions';

/* the challenge here is how to create a modal-like child component that updates the state of its parent component. 
I've considered two options: one is using bootstrap's build-in Modal, but this way we would have to be constraint to 
bootstrap's frameworks and compromise flexibility. Another way is to build from scratch. This takes longer and involves 
more thinking towards the architecture, but would offer a more scalable module that can be reused. Hence, I chose the 
latter option. 
*/

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.name)
    this.updateNameFromModal = this.updateNameFromModal.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.state = nextProps.name;
  }

  updateNameFromModal() {
     this.props.updateName(this.state); 
     this.saveNameToFile(); 
  }

  saveNameToFile() {
    fetch('/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {name: this.state} )
    })
      .catch(err => console.log(err));
  }

  render() {
    console.log('isModalOpen', this.props.isModalOpen);
    return (
      <div>
        <div>
          <h2>Name</h2>
          <p>{`${this.props.name.first} ${this.props.name.last}`}</p>
        </div>
        <div>
          <button onClick={this.props.openModal} >Edit Name</button>
        </div>
        {
          this.props.isModalOpen &&
          <Modal>
            <NameModal
              name={this.props.name}
              closeModal={this.props.closeModal}
              setNameState={this.setState.bind(this)}
              updateNameFromModal={this.updateNameFromModal}
            />
          </Modal>
        }
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
