import React from 'react';

const NameModal = (props) => (
  <div>
    <div>
      <button onClick={props.closeModal}>Close</button>
      <h3>Edit Name</h3>
    </div>
    <div>
      <label>
        <span>First Name:</span>
        <input type="text" defaultValue={props.name.first} onChange={e => props.setNameState({ first: e.target.value })} />
      </label>
      <label>
        <span>Last Name:</span>
        <input type="text" defaultValue={props.name.last} onChange={e => props.setNameState({ last: e.target.value })} />
      </label>
    </div>
    <div>
      <button onClick={props.closeModal}>Cancel</button>
      <button
        onClick={() => {
          props.updateNameFromModal();
          props.closeModal();
        }}>
        Save
      </button>
    </div>
  </div>
);

export default NameModal;