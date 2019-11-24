import React, { useState } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ExpansionItem from "./ExpansionItem";
import { AppState } from "../../../reducers";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#383f48",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "black"
    }
  }
}));

const Accordion = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>(false);
  const cities = useSelector((state: AppState) => state.cities.cities);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const expansionPanels = (cities as any).map((panel: any, index: number) => (
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
