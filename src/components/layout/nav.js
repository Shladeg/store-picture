import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import { logout } from "../../store/user/actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export const Nav = ({ setOpenSideMenu }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const user = useSelector(state => state.user);
  const isAuthenticated = user.isAuthenticated;

  const onCloseMenu = () => setAnchorEl(null);
  const onClickMenu = event => setAnchorEl(event.currentTarget);

  const handleClose = () => {};

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenSideMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Магазин картин
          </Typography>
          {isAuthenticated && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={onClickMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                anchorEl={anchorEl}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={onCloseMenu}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={onLogout}>Выйти</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
