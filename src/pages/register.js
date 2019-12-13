import React from "react";
import Grid from "@material-ui/core/Grid";

import LayoutPage from "../components/layout";
import RegisterForm from "../components/register-form";

export const Register = () => (
  <LayoutPage>
    <Grid container justify="center">
      <Grid item lg={4} xs={12}>
        <RegisterForm />
      </Grid>
    </Grid>
  </LayoutPage>
);

export default Register;
