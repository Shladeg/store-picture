import { createReducer } from "@reduxjs/toolkit";

import { createPicture, addFavorite, removeFavorite, search } from "./actions";
import pictureList from "../../data/pictures";

const initialState = {
  favorites: [],
  list: pictureList,
  search: ""
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
  },

  [search]: (state, { payload }) => {
    state.search = payload;

    const searching = item =>
      item.title.toLowerCase().includes(payload.toLowerCase());
    state.list = pictureList.filter(searching);

    return state;
  }
});

export default picturesReducer;
