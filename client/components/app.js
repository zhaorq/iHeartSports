import React, { Component } from 'react';
import { connect } from 'react-redux';
import Name from './name';
import Address from './address';
import Teams from './teams';
import { updateName, updateAddress, updateTeams } from './../actions/actions';

/* the challenge here is to create a modal-like child component that updates the state of its parent component. 
I've considered two options: one is using bootstrap's build-in Modal; it's a developed tool that can be easily used 
but we would have to be constraint to bootstrap's frameworks and compromise flexibility. Another way is to 
build from scratch. This takes longer and involves more thinking towards the app architecture, but would offer us
a more scalable module that can be reused. Hence, I went with the latter option. 
*/

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/data')
      .then(response => response.json())
      .then(response => {
        const data = JSON.parse(response);
        /* everytime this App is mounted, we want to fetch data from the 
        JSON file to update the states for each child component to use */
        data.name && this.props.updateName(data.name);
        data.address && this.props.updateAddress(data.address);
        data.teams && this.props.updateTeams(data.teams);
        console.log('data.name', data.name);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div id="header">
          <h1>Sports Magazine</h1>
        </div>
        <div id="content">
        <h2>Sports Magazine Settings</h2>
        <Name />
        <Address />
        <Teams />
        </div>
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

export default connect(null, mapDispatchToProps)(App);
