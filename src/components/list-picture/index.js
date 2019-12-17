import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Card from "../card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "40px 0"
  }
}));

export const ListPicture = () => {
  const classes = useStyles();
  const list = [1, 2, 4, 5];

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {list.map(item => (
          <Grid item xs={12} sm={6}>
            <Card key={item} name={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListPicture;
