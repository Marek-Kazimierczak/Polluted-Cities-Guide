import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "../../Common/Accordion";
import MainContainer from "../../Common/MainContainer";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2)
  }
}));

const Main = () => {
  const classes = useStyles();
  const loading = useSelector(state => state.cities.loading);
  const cities = useSelector(state => state.cities.cities);
  const thumbnails = useSelector(state => state.cities.images);

  return (
    <main>
      <MainContainer>
        {!cities || !thumbnails ? (
          <Typography
            align="center"
            display="block"
            variant="h5"
            component="span"
            className={classes.text}
          >
            {loading ? "Loading cities, please wait..." : "The list is empty"}
          </Typography>
        ) : (
          <Accordion />
        )}
      </MainContainer>
    </main>
  );
};

export default Main;
