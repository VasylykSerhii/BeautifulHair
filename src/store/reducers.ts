import { combineReducers } from 'redux';
import HooksSlice from './hooks/reducers.hooks';

const reducers = combineReducers({
  hooks: HooksSlice.reducer,
});

export default reducers;
