import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITypeAuth, IUser } from './types.auth';

const USER_DATA = (data: IUser | null) => {
  if (typeof window === 'undefined') return data;

  const userJson = localStorage.getItem('bh-user');

  if (userJson) {
    return JSON.parse(userJson);
  }

  return data;
};

const initAuth: ITypeAuth = {
  isLogin: false,
  user: USER_DATA(null),
  loading: false,
  error: '',
};

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: initAuth,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => ({
      ...state,
      user: action.payload,
      loading: false,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    removeUser: (state) => ({
      ...state,
      user: null,
    }),
  },
});

export const authActions = AuthSlice.actions;
export const { setUser, setError, removeUser } = authActions;
export default AuthSlice.reducer;
