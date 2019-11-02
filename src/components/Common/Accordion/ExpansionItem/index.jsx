import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

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
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, isExpanded) => {
    setExpanded(!expanded);
  };
  return (
    <ExpansionPanel expanded={expanded} onChange={handleChange}>
      <ExpansionPanelSummary
        className={classes.root}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${props.data.label}-content`}
        id={`panel-${props.data.label}-header`}
      >
        <Avatar
          alt={props.data.label}
          src={props.data.image}
          className={classes.avatar}
        />
        <Typography className={classes.heading}>{props.data.label}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.details}>
        <Typography>{props.data.value}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ExpansionItem;
