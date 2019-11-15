import { createAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { NotificationManager } from "react-notifications";

export const login = createAction("login", payload => {
  const users = useSelector(state => state.users);

  const user = users.find(user => user.email === payload.enail);
  if (!user) {
    // NotificationManager.warning("Вы не зарегистрированы");
    return undefined;
  }

  return payload;
});

export const logout = createAction("logout");
