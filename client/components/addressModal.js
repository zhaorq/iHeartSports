import React from 'react';

const AddressModal = (props) => (
  <div>
    <div>
      <button onClick={props.closeModal}>Close</button>
      <h3>Edit Address</h3>
    </div>
    <div>
      <label>
        <span>Street:</span>
        <input type="text" defaultValue={props.address.street} onChange={e => props.setAddressState({ street: e.target.value })} />
      </label>
      <label>
        <span>City:</span>
        <input type="text" defaultValue={props.address.city} onChange={e => props.setAddressState({ city: e.target.value })} />
      </label>
      <label>
        <span>State:</span>
        <input type="text" defaultValue={props.address.state} onChange={e => props.setAddressState({ state: e.target.value })} />
      </label>
      <label>
        <span>ZIP:</span>
        <input type="text" defaultValue={props.address.zip} onChange={(e) => props.setAddressState({ zip: e.target.value })} />
      </label>
    </div>
    <div>
      <button onClick={props.closeModal}>Cancel</button>
      <button
        onClick={() => {
          props.updateAddressFromModal();
          props.closeModal();
        }}>Save
      </button>
    </div>
  </div>
);

export default AddressModal;