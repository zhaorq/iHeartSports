
export function updateName(name) {
  return { type: 'UPDATE_NAME', payload: name };
}

export function updateAddress(address) {
  return { type: 'UPDATE_ADDRESS', payload: address };
}

export function updateTeams(teams) {
  return { type: 'UPDATE_TEAM', payload: teams };
}

export function openModal(category) {
  //category refers to name, address, or teams, whichever that is open.
  let modal = {}; 
  modal[category] = true; 
  return { type: 'OPEN_MODAL', payload: modal };
}

export function closeModal(category) {
  //if a certain category is open, this function switch it back to close. 
  let modal = {}; 
  modal[category] = false; 
  return { type: 'CLOSE_MODAL', payload: modal };
}