import { combineReducers } from "redux";
import countriesReducer from "./countries-reducer";
import citiesReducer from "./cities-reducer";
import cityDetailsReducer from "./city-details-reducer";

const rootReducer = combineReducers({
  countries: countriesReducer,
  cities: citiesReducer,
  cityDetails: cityDetailsReducer
});

export default rootReducer;
