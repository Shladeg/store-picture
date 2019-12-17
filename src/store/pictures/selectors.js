import { createSelector } from "@reduxjs/toolkit";

export const getPictures = state => state.pictures;
export const getList = createSelector(getPictures, pictures => pictures.list);
export const getFavorites = createSelector(
  getPictures,
  pictures => pictures.favorites
);
export const getIsFavoriteFactory = createSelector(
  getFavorites,
  favorites => id => !!favorites.find(item => item === id)
);
