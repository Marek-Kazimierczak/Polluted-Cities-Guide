import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Avatar
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { cityDetails } from "../../../../actions";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#212121",
    "& div": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  subHeading: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  text: {
    lineHeight: "1.5rem;"
  },
  details: {
    backgroundColor: "#303030"
  },
  avatar: {
    marginRight: theme.spacing(2),
    width: 40,
    height: 40
  }
}));

const ExpansionItem = props => {
  const { expanded, setChange, index } = props;

  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.cityDetails.loading);
  const label = useSelector(state => state.cities.cities[index]);
  const thumbnails = useSelector(state => state.cities.images);
  const details = useSelector(state => state.cityDetails.details);
  const activeCountryImage = useSelector(state => state.cities.countryImage);
  const measurements = useSelector(state => state.cities.measurements[index]);

  const name = `panel${index + 1}`;
  const image =
    thumbnails[index] !== null ? thumbnails[index] : activeCountryImage;

  const handleClick = () => {
    dispatch(cityDetails(label));
  };

  return (
    <ExpansionPanel
      expanded={expanded === name}
      onChange={setChange(name)}
      onClick={() => handleClick()}
    >
      <ExpansionPanelSummary
        className={classes.root}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${label}-content`}
        id={`panel-${label}-header`}
      >
        <Avatar alt={label} src={image} className={classes.avatar} />
        <Typography className={classes.heading}>{label}</Typography>
        <Typography className={classes.subHeading}>
          {measurements.value} {measurements.unit}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <Typography className={classes.text} variant="body2">
          {loading ? "Loading..." : details}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpansionItem;
