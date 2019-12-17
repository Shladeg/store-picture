import { createReducer } from "@reduxjs/toolkit";

import { createPicture, addFavorite, removeFavorite } from "./actions";
import pictureList from "../../data/pictures";

const initialState = {
  favorites: [],
  list: pictureList
};

export const picturesReducer = createReducer(initialState, {
  [createPicture]: (state, { payload }) => {
    if (payload) {
      const id = state.list.length + 1;

      state.list.push({
        id,
        ...payload
      });
    }

    return state;
  },

  [addFavorite]: (state, { payload }) => {
    if (payload) {
      state.favorites.push(payload);
    }

    return state;
  },

  [removeFavorite]: (state, { payload }) => {
    state.favorites = state.favorites.filter(item => item !== payload);

    return state;
  }
});

export default picturesReducer;
