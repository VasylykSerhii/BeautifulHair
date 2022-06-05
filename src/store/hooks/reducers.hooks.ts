import { createSlice } from '@reduxjs/toolkit';
import { IPayloadBoolean, IPayloadNumber } from 'store/types';

export interface IHooksState {
  isScrollDown: boolean;
  offsetTop: number;
  loading: boolean;
}

const initialState: IHooksState = {
  isScrollDown: false,
  offsetTop: null,
  loading: false,
};

const HooksSlice = createSlice({
  name: 'Hooks',
  initialState: initialState,
  reducers: {
    setLoadingHooks: (state, { payload }: IPayloadBoolean) => ({
      ...state,
      loading: payload,
    }),
    setScrollDown: (state, { payload }: IPayloadBoolean) => ({
      ...state,
      isScrollDown: payload,
    }),
    setOffsetTop: (state, { payload }: IPayloadNumber) => ({
      ...state,
      offsetTop: payload,
    }),
  },
});

export const hooksActionst = HooksSlice.actions;

export default HooksSlice;
