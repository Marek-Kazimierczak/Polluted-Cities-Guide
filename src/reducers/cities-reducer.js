import {
  LOADING_CITIES,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED
} from "../actions";

const initialState = {
  cities: ["Kraków", "Warszawa", "Żory", "Rybnik", "Wrocław"], //null
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_CITIES: {
      return { ...state, error: null, loading: true };
    }
    case GET_CITIES_SUCCESS: {
      const cities = action.payload.map(object => object.city);
      //   return {
      //     ...state,
      //     cities: cities,
      //     loading: false
      //   };
    }
    case GET_CITIES_FAILED: {
      return { ...state, error: action.payload, loading: false };
    }

    default:
      return state;
  }
}
