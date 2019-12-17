import { createReducer } from "@reduxjs/toolkit";

import { register } from "./actions";
import useStorage from "../use-storage";

const storage = useStorage();

const initialState = storage.users.get();

export const usersReducer = createReducer(initialState, {
  [register]: (state, { payload }) => {
    if (payload) {
      const registerUser = { id: state.length + 1, ...payload };

      storage.users.add(registerUser);
      state = [registerUser, ...state];
    }

    return state;
  }
});

export default usersReducer;
