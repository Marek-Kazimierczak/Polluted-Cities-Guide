import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import ExpansionItem from "./ExpansionItem";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflow: "hidden"
  }
}));

const Accordion = () => {
  const classes = useStyles();
  const cities = useSelector(state => state.cities.cities);
  const measurements = useSelector(state => state.cities.measurements);
  const thumbnails = useSelector(state => state.cities.images);
  const activeCountryImage = useSelector(state => state.cities.countryImage);
  const [panels, setPanels] = useState(null);
  const [images, setImages] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setImages(thumbnails);
    setPanels(cities);
  }, [cities, thumbnails]);

  const expansionPanels =
    panels &&
    images &&
    panels.map((panel, index) => {
      const data = {
        name: `panel${index + 1}`,
        label: cities[index],
        image: images[index] !== null ? images[index] : activeCountryImage,
        measurements: measurements[index]
      };

      return (
        <ExpansionItem
          data={data}
          key={index}
          expanded={expanded}
          setChange={handleChange}
        />
      );
    });

  return <Paper className={classes.root}>{expansionPanels}</Paper>;
};

export default Accordion;
