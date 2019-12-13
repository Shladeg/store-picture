import { createAction } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";

// Не забывай что createAction должен возвращать payload
export const login = createAction("login", payload => {
  const { users } = window.store.getState();

  // TODO: проверять на пароль
  const user = users.find(user => user.email === payload.email);
  if (!user) {
    NotificationManager.warning("Пользователь с таким email не существует");
    return {
      payload: null
    };
  }

  return {
    payload: user
  };
});

export const logout = createAction("logout");
