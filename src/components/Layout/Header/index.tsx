import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import Select from "../../Common/Select";
import MainContainer from "../../Common/MainContainer";

const useStyles = makeStyles(theme => ({
  heading: {
    lineHeight: "4rem;"
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  text: {
    lineHeight: "2rem;"
  }
}));

const Header = () => {
  const classes = useStyles();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <header>
      <MainContainer header>
        <Typography
          className={classes.heading}
          align="center"
          variant="h3"
          component="h2"
          gutterBottom
        >
          <span role="img" aria-label="pollution">
            🏭
          </span>{" "}
          Polluted Cities Guide
        </Typography>
        <Divider className={classes.divider} />
        <Typography className={classes.text} align="center" component="p">
          This is the guide that displays 10 most polluted cities in 2019
          according to particle pollution (PM10) for a selected country.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Select />
        </form>
      </MainContainer>
    </header>
  );
};

export default Header;
