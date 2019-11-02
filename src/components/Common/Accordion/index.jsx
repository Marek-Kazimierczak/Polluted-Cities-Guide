import React from "react";
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

  const randomText =
    "There was a bit of a war on Material UI at my last job. It’s a heavy library that is (understandably) very opinionated, while Styled Components was a new found freedom. We could write regular CSS AND inject custom properties like any other React component?? Sign us up.";

  const suggestions = [
    { label: "Poland", value: randomText, image: "/assets/poland.svg" },
    { label: "Germany", value: randomText, image: "/assets/germany.svg" },
    { label: "Spain", value: randomText, image: "/assets/spain.svg" },
    { label: "France", value: randomText, image: "/assets/france.svg" }
  ];

  const panels = suggestions.map((panel, index) => (
    <ExpansionItem data={panel} key={index} />
  ));

  return <Paper className={classes.root}>{panels}</Paper>;
};

export default Accordion;
