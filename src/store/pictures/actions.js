import { createAction } from "@reduxjs/toolkit";

export const createPicture = createAction("pictures/create");
export const addFavorite = createAction("pictures/add-favorite");
export const removeFavorite = createAction("pictures/remove-favorite");
export const search = createAction("pictures/search");
