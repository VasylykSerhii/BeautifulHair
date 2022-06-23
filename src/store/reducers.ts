import { combineReducers } from 'redux';
import { auth, hooks } from 'store';

const reducers = combineReducers({
  auth,
  hooks,
});

export default reducers;
