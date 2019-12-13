import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { login } from "../../store/user";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const LoginForm = ({ onLogin }) => {
  const classes = useStyles();

  const onSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    const userData = JSON.parse(JSON.stringify(Object.fromEntries(data)));

    onLogin(userData);
  };

  return (
    <form className={classes.form} noValidate onSubmit={onSubmit}>
      <Typography>Авторизация</Typography>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Пароль"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Войти
      </Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);
