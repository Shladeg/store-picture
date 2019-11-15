import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

import { login, logout } from "../../store/user";

export const TestComponentRedux = () => {
  // Получение стейта из редакса
  const user = useSelector(state => state.user, shallowEqual);
  console.log("user redux", user);
  // Нужна всегда для вызова события
  const dispatch = useDispatch();

  const onLogin = () => dispatch(login({ firstName: "lol" }));
  const onLogout = () => dispatch(logout());

  return (
    <div>
      <Button onClick={onLogin}>Login</Button>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default TestComponentRedux;
