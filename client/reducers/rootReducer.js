import { combineReducers } from 'redux';

const name = (state = {first: "", last: ""}, action) => {
  if (action.type === "UPDATE_NAME") {
    return action.payload;
  }
  return state;
};

const address = (state = {street: "", city: "", state: "", zip: ""}, action) => {
  if (action.type === "UPDATE_ADDRESS") {
    return action.payload;
  }
  return state;
};

const teams = (state = [], action) => {
  if (action.type === "UPDATE_TEAM") {
    return action.payload;
  }
  return state;
};

const modal = (state = {}, action) => {
  if(action.type === "OPEN_MODAL") {
    /*we want to make sure that only one modal can be open at a time, so each time 
     user opens a modal, we merge the status of the open modal with an object in which 
     all properties' value is false to return an object with only one open property*/
     return Object.assign({name: false, address: false, teams: false},action.payload)
  }
  if(action.type === "CLOSE_MODAL") {
     return Object.assign({name: false, address: false, teams: false},action.payload)
  }
  return state; 
}


const rootReducer = combineReducers({ name, address, teams, modal });
export default rootReducer;
