import React from "react";
import Grid from "@material-ui/core/Grid";

import LayoutPage from "../components/layout";
import LoginForm from "../components/login-form";

export const Login = () => (
  <LayoutPage>
    <Grid container justify="center">
      <Grid item lg={4} xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  </LayoutPage>
);

export default Login;
