import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamsModal from './teamsModal';
import Modal from './modal';
import { updateTeams, openModal, closeModal } from './../actions/actions';

class Teams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [...props.teams]
    };
    this.updateTeamsFromModal = this.updateTeamsFromModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state.teams = [...nextProps.teams];
  }

  updateTeamsFromModal() {
    const cleanTeam = this.state.teams.filter(team => team !== "");
    this.props.updateTeams(cleanTeam);
    this.saveTeamsToFile(cleanTeam);
  }

  saveTeamsToFile(updatedTeams) {
    fetch('/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ teams: updatedTeams })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div>
          <h2>Favourite Teams</h2>
          {
            this.props.teams.map((team, i) => (
              <p key={i}>{team}</p>
            ))}
        </div>
        <div>
          <button onClick={this.props.openModal} >Add Teams</button>
        </div>
        {
          this.props.isModalOpen &&
          <Modal>
            <TeamsModal
              teams={this.state.teams}
              closeModal={this.props.closeModal}
              setTeamsState={this.setState.bind(this)}
              updateTeamsFromModal={this.updateTeamsFromModal}
            />
          </Modal>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  teams: state.teams,
  isModalOpen: state.modal.teams,
});

const mapDispatchToProps = dispatch => ({
  updateTeams(teams) {
    dispatch(updateTeams(teams));
  },
  openModal() {
    dispatch(openModal('teams'));
  },
  closeModal() {
    dispatch(closeModal('teams'));
  },
});

Teams = connect(mapStateToProps, mapDispatchToProps)(Teams);
export default Teams;
