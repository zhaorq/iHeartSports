import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddressModal from './addressModal';
import { updateAddress, openModal, closeModal } from './../actions/actions';

//This component is very similiar to the Name component. 
class Address extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, props.address),
      this.updateAddressFromModal = this.updateAddressFromModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = nextProps.address;
  }

  updateAddressFromModal() {
    this.props.updateAddress(this.state);
    this.saveAddressToFile();
  }

  saveAddressToFile() {
    fetch('/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ address: this.state })
    })
      .catch(err => console.log(err));
  }

  render() {
    console.log('isModalOpen', this.props.isModalOpen)
    return (
      <div>
        <div>
          <h2>Address</h2>
          <p>{`${this.props.address.street} 
               ${this.props.address.city}
               ${this.props.address.state}
               ${this.props.address.zip}`}
          </p>
        </div>
        <div>
          <button onClick={this.props.openModal} >Edit Address</button>
        </div>
        {
          this.props.isModalOpen &&
            <AddressModal
              address={this.props.address}
              closeModal={this.props.closeModal}
              setAddressState={this.setState.bind(this)}
              updateAddressFromModal={this.updateAddressFromModal}
            />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  address: state.address,
  isModalOpen: state.modal.address,
});

const mapDispatchToProps = dispatch => ({
  updateAddress(address) {
    dispatch(updateAddress(address));
  },
  openModal() {
    dispatch(openModal('address'));
  },
  closeModal() {
    dispatch(closeModal('address'));
  },
});

Address = connect(mapStateToProps, mapDispatchToProps)(Address);
export default Address;
