import React from 'react';

const NameModal = (props) => (
  <div className="modal-container">
    <div>
      <h3>Edit Name</h3>
    </div>
    <div>
      <label>
        <span>First Name:</span>
        <input type="text" defaultValue={props.name.first}
          onChange={e => props.setNameState({ first: e.target.value })} />
      </label>
      <label>
        <span>Last Name:</span>
        <input type="text" defaultValue={props.name.last}
          onChange={e => props.setNameState({ last: e.target.value })} />
      </label>
    </div>
    <div className="modal-footer">
      <button
        onClick={() => {
          props.updateNameFromModal();
          props.closeModal();
        }}>Save
      </button>
      <button className="cancel-button" onClick={props.closeModal}>Cancel</button>
      <button onClick={props.closeModal}>Close</button>
    </div>
  </div>
);

export default NameModal;