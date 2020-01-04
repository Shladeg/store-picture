import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  card: {
    maxWidth: 345,
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PictureDialog = ({ onClose, id, open, ...dialogProps }) => {
  const [pictureData, setPicture] = useState(undefined);
  const [commentsData, setComments] = useState(undefined);
  const [picturesData, setPictures] = useState(undefined);

  const classes = useStyles();

  const fetchData = () => {
    fetch(`/picture${id}.json`)
      .then(response => response.json())
      .then(({ pictureData }) => {
        setPicture(pictureData);

        fetch(`/comment${id}.json`)
          .then(response => response.json())
          .then(({ commentsData }) => {
            setComments(commentsData);

              fetch('/pictures.json')
              .then(response => response.json())
              .then(({ picturesData }) => setPictures(picturesData));
          });
      })
      .catch((error) => {
        setPicture(undefined);
        setComments(undefined);
        setPictures(undefined);
      });
  };

  useEffect(() => {
    if (open) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, open]);

  if (!commentsData) {
    return (
      <Dialog
        fullScreen
        TransitionComponent={Transition}
        onClose={onClose}
        open={open}
        {...dialogProps}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Not Fount {id}
          </Typography>
        </Toolbar>
      </Dialog>
    );
  }

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      onClose={onClose}
      open={open}
      {...dialogProps}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Picture {id}
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            Exit
          </Button>
        </Toolbar>
      </AppBar>
      
      <div align = 'center'>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar
            src={pictureData.author.image}
            aria-label="recipe"
            className={classes.avatar}
          >
            {pictureData.author.fullName}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={pictureData.title}
        subheader={pictureData.createdAt}
      />
      <CardMedia
        className={classes.media}
        image={pictureData.image}
        title={pictureData.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {pictureData.description}
        </Typography>
      </CardContent>
    </Card>
    </div>

      <List>
        {commentsData.map(item => (
          <ListItem button>
            <ListItemText primary={item.name} secondary={item.email} />
          </ListItem>
        ))}

        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
        <b>СМОТРИТЕ ТАКЖЕ</b>  
      <Grid container spacing={1}>
          {picturesData.map(item => (
            <Grid key={item.id} item xs={12} sm={6}>
              <Card item={item} />
            </Grid>
          ))}
        </Grid>

    </Dialog>
  );
};

export default PictureDialog;
