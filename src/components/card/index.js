import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import {
  getIsFavoriteFactory,
  addFavorite,
  removeFavorite
} from "../../store/pictures";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export const CardPicture = ({ item }) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => getIsFavoriteFactory(state)(item.id));
  const classes = useStyles();

  const handleFavorite = () =>
    isFavorite ? removeFromFavorite() : addToFavorite();

  const addToFavorite = () => dispatch(addFavorite(item.id));
  const removeFromFavorite = () => dispatch(removeFavorite(item.id));

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            src={item.author.image}
            aria-label="recipe"
            className={classes.avatar}
          >
            {item.author.fullName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.title}
        subheader={item.createdAt}
      />
      <CardMedia
        className={classes.media}
        image={item.image}
        title={item.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleFavorite}>
          <FavoriteIcon color={isFavorite ? "primary" : "inherit"} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardPicture;
