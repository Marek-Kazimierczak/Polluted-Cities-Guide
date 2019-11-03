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
  const activeCountry = useSelector(state => state.cities.countryImage);
  const [panels, setPanels] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setPanels(cities);
  }, [cities]);

  const items = !panels
    ? null
    : panels.map((panel, index) => {
        const data = {
          label: panel,
          name: `panel${index + 1}`,
          image: activeCountry
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

  return <Paper className={classes.root}>{items}</Paper>;
};

export default Accordion;
