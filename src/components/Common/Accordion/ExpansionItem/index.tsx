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
import { AppState } from "../../../../reducers";

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

interface Props {
  index: number;
  expanded: string | false;
  setChange: (
    panel: string
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
}

const ExpansionItem = (props: Props) => {
  const { expanded, setChange, index } = props;

  const classes = useStyles();
  const dispatch = useDispatch();

  const {
    cityDetails: { loading, details },
    cities: {
      countryImage: activeCountryImage,
      images: thumbnails,
      cities,
      measurements
    }
  } = useSelector((state: AppState) => state);

  const label = cities[index];
  const measurement = measurements[index];

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
        {image && <Avatar alt={label} src={image} className={classes.avatar} />}
        <Typography className={classes.heading}>{label}</Typography>
        {measurement && (
          <Typography className={classes.subHeading}>
            {measurement.value} {measurement.unit}
          </Typography>
        )}
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
