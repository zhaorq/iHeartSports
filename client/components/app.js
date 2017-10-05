import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Name from './name';
import Address from './address';
import Teams from './teams';
import { updateName, updateAddress, updateTeams } from './../actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(response => {
        const data = JSON.parse(response);
        data.name && this.props.updateName(data.name);
        data.address && this.props.updateAddress(data.address);
        data.teams && this.props.updateTeams(data.teams);  
        console.log('data.name',data.name); 
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          <Navbar />
          <h2 className="header2">Sports Magazine Settings</h2>
          <Name />
          <Address />
          <Teams />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateName(name) {
    dispatch(updateName(name));
  },
  updateAddress(address) {
    dispatch(updateAddress(address));
  },
  updateTeams(teams) {
    dispatch(updateTeams(teams));
  },
});

export default connect(null,mapDispatchToProps)(App);
