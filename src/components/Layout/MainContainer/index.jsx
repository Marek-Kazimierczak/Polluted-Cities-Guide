import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    minHeight: "80vh"
  },
  paper: {
    padding: theme.spacing(4),
    height: "100%",
    backgroundColor: "#383f48"
  }
}));

const MainContainer = props => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>{props.children}</Paper>
    </Container>
  );
};

MainContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainContainer;
