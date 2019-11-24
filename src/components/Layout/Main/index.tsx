import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Accordion from "../../Common/Accordion";
import MainContainer from "../../Common/MainContainer";
import { AppState } from "../../../reducers";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2)
  }
}));

const Main = () => {
  const classes = useStyles();
  const { loading, cities, images: thumbnails } = useSelector(
    (state: AppState) => state.cities
  );

  return (
    <main>
      <MainContainer>
        {!cities.length || !thumbnails.length ? (
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
