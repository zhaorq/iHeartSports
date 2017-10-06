
export function updateName(name) {
  return { type: 'UPDATE_NAME', payload: name };
}

export function updateAddress(address) {
  return { type: 'UPDATE_ADDRESS', payload: address };
}

export function updateTeams(teams) {
  return { type: 'UPDATE_TEAM', payload: teams };
}
/* The open and close functions are shared by all componenets; therefore, it is an
ideal case to use Redux's store for function sharing. It makes sense to me to integrate
the open status of all categories in one object for easy use. Therefore, my thinking here
is to return an object with the changing status of a certain category and later merge 
with the object with all categories' current status in the rootReducer */
export function openModal(category) {
  //category is a string of 'name', 'address', or 'teams', whichever that is open.
  let modal = {}; 
  modal[category] = true; 
  return { type: 'OPEN_MODAL', payload: modal };
}

export function closeModal(category) {
  let modal = {}; 
  modal[category] = false; 
  return { type: 'CLOSE_MODAL', payload: modal };
}