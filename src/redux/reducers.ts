import { combineReducers } from "redux";

import hooks from "./hooks/reducers";

const rootReducer = combineReducers({
  hooks,
});

export default rootReducer;
