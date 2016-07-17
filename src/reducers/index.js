import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import combos from './combos';
import user from './user';

const rootReducer = combineReducers({
  routing,
  combos,
  user
});

export default rootReducer;
