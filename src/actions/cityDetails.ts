import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { getCityDetails } from "../services/api";
import {
  LOADING_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILED
} from "../types";

export const cityDetails = (
  city: string
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async function(
    dispatch: ThunkDispatch<{}, {}, AnyAction>
  ): Promise<void> {
    dispatch({ type: LOADING_DETAILS, payload: city });

    try {
      const details = await getCityDetails(city);
      dispatch({
        type: GET_DETAILS_SUCCESS,
        payload: details
      });
    } catch (error) {
      dispatch({ type: GET_DETAILS_FAILED, payload: error });
    }
  };
};
