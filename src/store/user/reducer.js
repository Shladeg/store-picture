import { createReducer } from "@reduxjs/toolkit";

import { login, logout } from "./actions";

const initialState = {
  firstName: undefined,
  lastName: undefined,
  phone: undefined,
  isAuthenticated: true
};

export const userReducer = createReducer(initialState, {
  [login]: (state, { payload }) => {
    if (payload) {
      state = {
        ...payload,
        isAuthenticated: true
      };
    }

    return state;
  },
  [logout]: state => {
    state = initialState;

    return state;
  }
});

export default userReducer;
