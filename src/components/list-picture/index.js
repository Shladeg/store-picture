import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Card from "../card";
import { getList } from "../../store/pictures";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "40px 0"
  }
}));

export const ListPicture = () => {
  const classes = useStyles();
  const list = useSelector(getList);

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {list.map(item => (
          <Grid key={item.id} item xs={12} sm={6}>
            <Card item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ListPicture;
