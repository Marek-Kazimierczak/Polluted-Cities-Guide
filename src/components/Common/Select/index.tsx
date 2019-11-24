import React, { useState, useEffect, CSSProperties } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import { ControlProps } from "react-select/src/components/Control";
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
import { countries } from "../../../config/countries";
import { getCities, getCitiesImages } from "../../../actions";
import { AppState } from "../../../reducers";
import {
  InputComponent,
  OptionType,
  IOption,
  IPlaceholder,
  ISingleValue,
  IValueContainer,
  IMenu,
  IComponents
} from "../../../types";

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
  avatar: {
    width: 24,
    height: 24
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

const inputComponent = ({ inputRef, ...props }: InputComponent) => {
  return <div ref={inputRef} {...props} />;
};

const Control = (props: ControlProps<OptionType>) => {
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

const Option = (props: IOption) => {
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

const Placeholder = (props: IPlaceholder) => {
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

const SingleValue = (props: ISingleValue) => {
  const classes = useStyles();
  return (
    <Chip
      key={props.label}
      avatar={
        <Avatar
          className={classes.avatar}
          alt={props.data.label}
          src={props.data.image}
        />
      }
      tabIndex={-1}
      label={props.children}
      className={classes.chip}
      {...props.innerProps}
    />
  );
};

const ValueContainer = (props: IValueContainer) => {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
};

const Menu = (props: IMenu) => {
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

const components: IComponents = {
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
  const suggestions = countries;
  const cities = useSelector((state: AppState) => state.cities.cities);
  const dispatch = useDispatch();

  const initialState = JSON.parse(
    sessionStorage.getItem("initialValue") || "null"
  );

  const [value, setValue] = useState(initialState);

  const handleChange = (value: any) => {
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
    input: (base: CSSProperties) => ({
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
