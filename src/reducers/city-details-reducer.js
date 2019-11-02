import {
  LOADING_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED
} from "../actions";

const initialState = {
  details: null,
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DETAILS: {
      return { ...state, error: null, loading: true };
    }
    case GET_DETAILS_SUCCESS: {
      return {
        ...state,
        details: action.payload,
        loading: false
      };
    }
    case GET_DETAILS_FAILED: {
      return { ...state, error: action.payload, loading: false };
    }
    default:
      return state;
  }
}
