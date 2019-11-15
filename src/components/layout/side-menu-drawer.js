import React from "react";
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
    label: "Авторизация"
  }
];

export const SideMenuDrawer = ({ open, setOpen }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <div className={classes.list} role="presentation">
        <List>
          {menu.map(item => (
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
