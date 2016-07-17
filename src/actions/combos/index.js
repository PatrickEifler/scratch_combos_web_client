import fetch from 'isomorphic-fetch';
import * as Types from './constants';


const combosBackendURl = 'https://www.example.com';

//use axios for requests
function fetchCombos() {
  return (dispatch, getState) => {
    dispatch(requestCombos());
    return fetch(combosBackendURl, {
      headers: {
        authorization: getState().user.token,
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveCombos(json)));
  };
}

function addComboRequest(combo, getState) {
  return fetch(combosBackendURl, {
    method: 'POST',
    headers: {
      authorization: getState().user.token,
    },
    body: combo
  })
  .then(response => JSON.stringify(response.json()));
}

export function receiveCombos(combos) {
  return {
    type: Types.COMBOS_GET_SUCCESS,
    lastReceived: Date.now(),
    combos
  };
}

export function receiveCombo(combo) {
  return {
    type: Types.RECEIVE_COMBO_SUCCESS,
    lastReceived: Date.now(),
    combo
  };
}

export function requestCombos() {
  return {
    type: Types.COMBOS_GET_REQUEST
  };
}

export function onAddComboRequest() {
  return {
    type: Types.ADD_COMBO_REQUEST
  };
}

function shouldFetchCombos(state) {
  if (state.combos.isFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchCombosIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCombos(getState())) {
      return dispatch(fetchCombos());
    }
  };
}

export function addCombo(combo) {
  return (dispatch, getState) => {
    return addComboRequest(combo, getState).then(
      addedCombo => { dispatch(receiveCombo(addedCombo)); }
    );
  };
}

