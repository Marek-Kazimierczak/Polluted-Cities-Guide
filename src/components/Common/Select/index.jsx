import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { emphasize, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  NoSsr,
  TextField,
  Paper,
  Chip,
  MenuItem
} from "@material-ui/core";

import { getCities, getCitiesImages } from "../../../actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 290,
    margin: "40px auto",

    [theme.breakpoints.down("sm")]: {
      margin: "40px auto 0"
    }
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
    width: "50%",
    borderRadius: 0,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#424242"
    }
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    boxShadow: "0px 25px 25px 25px rgba(0,0,0,0.75)",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#424242"
    }
  },
  divider: {
    height: theme.spacing(2)
  }
}));

const inputComponent = ({ inputRef, ...props }) => {
  return <div ref={inputRef} {...props} />;
};

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ])
};

const Control = props => {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
};

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.object.isRequired
};

const Option = props => {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
};

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired
};

const Placeholder = props => {
  const { selectProps, innerProps = {}, children } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
};

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

const SingleValue = props => {
  const classes = useStyles();
  return (
    <Chip
      key={props.label}
      avatar={<Avatar alt={props.data.label} src={props.data.image} />}
      tabIndex={-1}
      label={props.children}
      className={classes.chip}
      {...props.innerProps}
    />
  );
};

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.any.isRequired,
  selectProps: PropTypes.object.isRequired
};

const ValueContainer = props => {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
};

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired
};

const Menu = props => {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
};

Menu.propTypes = {
  children: PropTypes.element.isRequired,
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};

const components = {
  Control,
  Menu,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

const CountrySelect = () => {
  const classes = useStyles();
  const theme = useTheme();
  const suggestions = useSelector(state => state.countries);
  const cities = useSelector(state => state.cities.cities);
  const dispatch = useDispatch();

  const initialState = JSON.parse(
    sessionStorage.getItem("initialValue") || "null"
  );

  const [value, setValue] = useState(initialState);

  const handleChange = value => {
    setValue(value);
    sessionStorage.setItem("initialValue", JSON.stringify(value));
    dispatch(getCities(value));
  };

  useEffect(() => {
    value && dispatch(getCities(value));
  }, [value, dispatch]);

  useEffect(() => {
    cities && dispatch(getCitiesImages(cities));
  }, [cities, dispatch]);

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  return (
    <div className={classes.root}>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          inputId="react-select"
          TextFieldProps={{
            InputLabelProps: {
              htmlFor: "react-select",
              shrink: true
            }
          }}
          placeholder="Choose a country"
          options={suggestions}
          components={components}
          value={value}
          onChange={handleChange}
        />
        <div className={classes.divider} />
      </NoSsr>
    </div>
  );
};

export default CountrySelect;
