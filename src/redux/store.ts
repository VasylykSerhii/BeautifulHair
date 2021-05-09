import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import sagas from "./sagas";
import { IChatState } from "./hooks/reducers";

const sagaMiddleware = createSagaMiddleware();

export interface IStore {
  hooks: IChatState;
}

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(sagas);

export default store;
