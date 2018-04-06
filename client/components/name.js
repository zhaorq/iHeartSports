import React, { Component } from 'react';
import { connect } from 'react-redux';
import NameModal from './nameModal';
import { updateName, openModal, closeModal } from './../actions/actions';

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.name)
    this.updateNameFromModal = this.updateNameFromModal.bind(this);
  }

  /* componentWillReceiveProps allows us to proceed after the data
  in its parent component (App) is populated and passed down to this component. 
  */
  componentWillReceiveProps(nextProps) {
    this.state = nextProps.name;
  }
//When click save, update the 'store' and save to the JSON file. 
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
            <NameModal
              name={this.props.name}
              closeModal={this.props.closeModal}
              setNameState={this.setState.bind(this)}
              updateNameFromModal={this.updateNameFromModal}
            />
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
