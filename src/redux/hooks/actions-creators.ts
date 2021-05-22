import {
  SET_STATE_HOOKS_ACTION,
  SET_LOADING_HOOKS_ACTION,
  SET_SCROLLDIR_ACTION,
  SET_OFFSETTOP_ACTION,
} from "./actions-types";
import { IHooksState } from "./reducers";

export const setStateCreation = (payload: Partial<IHooksState>) => {
  return {
    type: SET_STATE_HOOKS_ACTION,
    payload,
  };
};

export const setLoadingCreation = (bool) => {
  return {
    type: SET_LOADING_HOOKS_ACTION,
    bool,
  };
};
export const setScrollDirCreation = (bool) => {
  return {
    type: SET_SCROLLDIR_ACTION,
    bool,
  };
};
export const setOffsetTopCreation = (number) => {
  return {
    type: SET_OFFSETTOP_ACTION,
    number,
  };
};

const hooksActionCreators = {
  setStateCreation,
  setLoadingCreation,
};

export default hooksActionCreators;
