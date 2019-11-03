import React, { useState } from "react";
import { useSelector } from "react-redux";
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
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const expansionPanels = cities.map((panel, index) => (
    <ExpansionItem
      index={index}
      key={index}
      expanded={expanded}
      setChange={handleChange}
    />
  ));

  return <Paper className={classes.root}>{expansionPanels}</Paper>;
};

export default Accordion;
