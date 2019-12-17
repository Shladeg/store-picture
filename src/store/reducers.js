import { combineReducers } from "@reduxjs/toolkit";

// TODO: не забывай импортить новые редюсеры
import user from "./user"; // Авторизованный пользователь
import users from "./users"; // Зарегистрированные пользователи
import pictures from "./pictures";

export default combineReducers({
  user,
  users,
  pictures
});
