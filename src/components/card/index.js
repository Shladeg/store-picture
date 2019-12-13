import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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

export const CardPicture = ({ name }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CardPicture;
