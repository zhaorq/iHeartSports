import React, { Component } from 'react';

/*
The teamModal is a bit tricky compared to the another two: 
this modal as a child component needs to be re-rendered everytime when
user adds a new textbox. However, even the parent component (teams)'s 
state changed as user clicked the 'add one' button, it doesn't immediately re-render 
to update the child componenet. To solve the issue, I made the TeamModal a 
stateful component with a state that 'tracks' the change of the parent 
component's state, thus re-rendering the TeamsModal each time when the parent state changes.
The loop is like: child modal updates => parent state changes => child state changes =>
child re-rendered.  
*/

class TeamsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //keep track on changes of the parent component
      childTeams: this.props.teams
    }
    this.addOneTeam = this.addOneTeam.bind(this);
  }
/*This function adds one empty string to the end of the team array. 
I chose to updating the local state (childTeams) instead of the parent's
team array (this.props.teams) because it's easier and faster for updates */
  addOneTeam() {
    const newTeam = [...this.state.childTeams, ""];
    this.setState({ childTeams: newTeam });
  }
  render() {
    return (
      <div className="modal-container">
        <div>
          <h3>Add Teams</h3>
        </div>
        <div>
          {
            this.state.childTeams.map((team, i) => (
              <label>
                <span>Team {i + 1}:</span>
                <input type="text" defaultValue={team} onChange={e => {
                  this.props.teams[i] = e.target.value;
                  this.props.setTeamsState({ teams: this.props.teams })
                }}
                />
              </label>
            ))}
        </div>
        <div>
          <button className="add-one-btn" onClick={() => { this.addOneTeam() }}>
            + Add Another</button>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              this.props.updateTeamsFromModal();
              this.props.closeModal();
            }}>Save
        </button>
          <button className="cancel-button" onClick={this.props.closeModal}>Cancel</button>
          <button onClick={this.props.closeModal}>Close</button>
        </div>
      </div>
    )
  }
}

export default TeamsModal;