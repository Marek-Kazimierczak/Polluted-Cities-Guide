import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(4),
    height: "100%",
    backgroundColor: "#383f48",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#212121",
      padding: 0
    }
  },
  paperHeader: {
    padding: theme.spacing(4),
    height: "100%",
    backgroundColor: "#383f48",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#212121",
      padding: theme.spacing(2)
    }
  }
}));

const MainContainer = props => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={props.header ? classes.paperHeader : classes.paper}>
        {props.children}
      </Paper>
    </Container>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContainer;
