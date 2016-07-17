import * as Types from '../actions/combos/constants';

const initialState = {
  isFetching: false,
  items: []
};

const combos = (state = initialState, action) => {
  console.log('state', state);
  switch (action.type) {

    case Types.COMBOS_GET_REQUEST:
      console.log('sssssssssss');
      return Object.assign({}, state, {
        isFetching: true
      });

    case Types.COMBOS_GET_SUCCESS:
      let newItems = [];
      return Object.assign({}, state, {
        isFetching: false,
        items: newItems.concat(state.items, action.combos),
        lastUpdated: action.lastReceived
      });

    case Types.ADD_COMBO_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case Types.RECEIVE_COMBO_SUCCESS:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          action.combo
        ]
      });

    default:
      return state;
  }


  return state;
};

export default combos;
