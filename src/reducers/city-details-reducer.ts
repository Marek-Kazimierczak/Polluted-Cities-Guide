import {
  LOADING_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED,
  CityDetailsActionTypes,
  CityDetailsReducer
} from "../types";

const initialState: CityDetailsReducer = {
  details: null,
  activeCity: null,
  error: null,
  loading: false
};

export default function(state = initialState, action: CityDetailsActionTypes) {
  switch (action.type) {
    case LOADING_DETAILS: {
      return {
        ...state,
        details: null,
        activeCity: action.payload,
        error: null,
        loading: true
      };
    }
    case GET_DETAILS_SUCCESS: {
      return {
        ...state,
        details: !action.payload ? "No details available" : action.payload,
        loading: false
      };
    }
    case GET_DETAILS_FAILED: {
      return {
        ...state,
        details:
          Object.entries(action.payload).length === 0
            ? "No details available"
            : action.payload,
        error: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
