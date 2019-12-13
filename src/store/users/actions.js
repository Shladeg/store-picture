import { createAction } from "@reduxjs/toolkit";
import { NotificationManager } from "react-notifications";

export const register = createAction("register", payload => {
  const { users } = window.store.getState();

  const user = users.find(user => user.email === payload.email);

  if (user) {
    NotificationManager.warning("Пользователь с таким email уже существует");
    return {
      payload: null
    };
  }

  NotificationManager.success("Вы зарегистрированы");

  return {
    payload
  };
});
