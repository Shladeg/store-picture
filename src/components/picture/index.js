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

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PictureDialog = ({ onClose, id, open, ...dialogProps }) => {
  const [data, setData] = useState(undefined);
  const classes = useStyles();

  const fetchData = () => {
    fetch(`/data${id}.json`)
      .then(response => {
        return response.json();
      })
      .then(({ data }) => {
        setData(data);
      })
      .catch(function(error) {
        setData(undefined);
      });
  };

  useEffect(() => {
    if (open) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, open]);

  if (!data) {
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
            Sound {id}
          </Typography>
          <Button autoFocus color="inherit" onClick={onClose}>
            save
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        {data.map(item => (
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
    </Dialog>
  );
};

export default PictureDialog;
