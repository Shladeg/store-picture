import { createSelector } from "@reduxjs/toolkit";

export const getUser = state => state.user;
export const getIsAuthenticated = createSelector(
  getUser,
  user => user.isAuthenticated
);
