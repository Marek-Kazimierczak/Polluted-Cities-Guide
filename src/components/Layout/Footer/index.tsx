import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0)
  },
  divider: {
    margin: theme.spacing(1, 0)
  },
  text: {
    lineHeight: "2rem;"
  },
  copyright: {
    marginRight: theme.spacing(2)
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Divider className={classes.divider} />
      <Typography
        color="textSecondary"
        className={classes.text}
        align="center"
        component="p"
      >
        <span className={classes.copyright}>Copyright &copy;2019</span> Marek
        Kazimierczak
      </Typography>
    </footer>
  );
};

export default Footer;
