import { createReducer } from "@reduxjs/toolkit";

import { login, logout } from "./actions";
import useStorage from "../use-storage";

const storage = useStorage();

const initialState = {
  firstName: undefined,
  lastName: undefined,
  phone: undefined,
  isCustomer: false,
  isAuthenticated: false,
  ...storage.user.get()
};

export const userReducer = createReducer(initialState, {
  [login]: (state, { payload }) => {
    if (payload) {
      const user = {
        ...payload,
        isAuthenticated: true
      };

      storage.user.add(user);
      state = user;
    }

    return state;
  },
  [logout]: state => {
    state = initialState;
    storage.user.remove();

    return state;
  }
});

export default userReducer;
