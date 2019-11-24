import { combineReducers } from "redux";
import citiesReducer from "./cities-reducer";
import cityDetailsReducer from "./city-details-reducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  cityDetails: cityDetailsReducer
});

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;
