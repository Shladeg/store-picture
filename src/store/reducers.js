import { combineReducers } from "@reduxjs/toolkit";

// TODO: не забывай импортить новые редюсеры
import user from "./user"; // Авторизованный пользователь
import users from "./users"; // Зарегистрированные пользователи

export default combineReducers({
  user,
  users
});
