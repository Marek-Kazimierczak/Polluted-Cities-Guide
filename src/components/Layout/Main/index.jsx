import React from "react";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Accordion from "../../Common/Accordion";
import MainContainer from "../../Common/MainContainer";

const Main = () => {
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
            variant="h4"
            component="span"
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
