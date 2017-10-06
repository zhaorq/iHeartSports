import React from 'react';

const TeamsModal = (props) => (
  <div>
    <div>
      <button onClick={props.closeModal}>Close</button>
      <h3>Add Teams</h3>
    </div>
    <div>
      {
        props.teams.map((team, i) => (
          <label>
        <span>Team {i+1}:</span>
        <input type="text" defaultValue={team} onChange={
          e => {props.teams[i] = e.target.value; 
          props.setTeamsState({ teams: props.teams })}
        }
         />
      </label>
        ))
      }
    </div>
    <div>
      <button onClick={()=> props.addOneTeam()}> 
      + Add Another</button>
    </div>
    <div>
      <button onClick={props.closeModal}>Cancel</button>
      <button
        onClick={() => {
          props.updateTeamsFromModal();
          props.closeModal();
        }}>
        Save
      </button>
    </div>
  </div>
);

export default TeamsModal;