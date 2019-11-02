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

const randomText =
  "There was a bit of a war on Material UI at my last job. It’s a heavy library that is (understandably) very opinionated, while Styled Components was a new found freedom. We could write regular CSS AND inject custom properties like any other React component?? Sign us up.";
const image = "/assets/poland.svg";

const Accordion = () => {
  const classes = useStyles();
  const cities = useSelector(state => state.cities.cities);
  const [panels, setPanels] = useState(null);

  useEffect(() => {
    setPanels(cities);
  }, [cities]);

  const items = !panels
    ? null
    : panels.map((panel, index) => {
        const data = { label: panel, value: randomText, image };
        return <ExpansionItem data={data} key={index} />;
      });

  return <Paper className={classes.root}>{items}</Paper>;
};

export default Accordion;
