import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import Card from "../card";
import { getList } from "../../store/pictures";
import DataProvider from "./data-provider";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "40px 0"
  }
}));

export const ListPicture = () => {
  const history = useHistory();
  const classes = useStyles();
  const list = useSelector(getList);

  const showFullPicture = id => history.push(`/pictures/${id}`);

  return (
    <div className={classes.root}>
      <DataProvider>
        <Grid container spacing={1}>
          {list.map(item => (
            <Grid key={item.id} item xs={12} sm={6}>
              <Card item={item} onClick={showFullPicture} />
            </Grid>
          ))}
        </Grid>
      </DataProvider>
    </div>
  );
};

export default ListPicture;
