import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

const menu = [
  {
    key: "/",
    label: "Главная"
  },
  {
    key: "/login",
    label: "Авторизация",
    isAuthorized: true
  },
  {
    key: "/register",
    label: "Регистрация",
    isAuthorized: true
  }
];

export const SideMenuDrawer = ({ open, setOpen }) => {
  const classes = useStyles();
  const user = useSelector(state => state.user, shallowEqual);
  const isAuthorized = user.isAuthorized;

  const userMenu = menu.filter(item => item.isAuthorized !== isAuthorized);

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div className={classes.list} role="presentation">
        <List>
          {userMenu.map(item => (
            <NavLink key={item.key} to={item.key}>
              <ListItem button>
                <ListItemText primary={item.label} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default SideMenuDrawer;
