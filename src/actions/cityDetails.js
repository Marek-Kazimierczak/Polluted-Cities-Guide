import { getCityDetails } from "../services/api";

export const LOADING_DETAILS = "LOADING_DETAILS";
export const GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS";
export const GET_DETAILS_FAILED = "GET_DETAILS_FAILED";

export const cityDetails = city => {
  return async function(dispatch) {
    dispatch({ type: "LOADING_DETAILS", payload: true });

    try {
      const details = await getCityDetails(city);
      dispatch({
        type: "GET_DETAILS_SUCCESS",
        payload: details
      });
    } catch (error) {
      dispatch({ type: "GET_DETAILS_FAILED", payload: error });
    } finally {
      dispatch({ type: "LOADING_DETAILS", payload: false });
    }
  };
};
