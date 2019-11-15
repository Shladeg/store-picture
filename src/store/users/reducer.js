import { createReducer } from "@reduxjs/toolkit";

import { register } from "./actions";

const initialState = [];

export const usersReducer = createReducer(initialState, {
  [register]: (state, { payload }) => {
    state = [payload, ...state];

    return state;
  }
});

export default usersReducer;
