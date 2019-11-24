export const LOADING_DETAILS = "LOADING_DETAILS";
export const GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS";
export const GET_DETAILS_FAILED = "GET_DETAILS_FAILED";

interface LoadingCityDetailsAction {
  type: typeof LOADING_DETAILS;
  payload: boolean;
}
interface GetCityDetailsSuccessAction {
  type: typeof GET_DETAILS_SUCCESS;
  payload: boolean;
}
interface GetCityDetailsFailedAction {
  type: typeof GET_DETAILS_FAILED;
  payload: boolean;
}

export type CityDetailsActionTypes =
  | LoadingCityDetailsAction
  | GetCityDetailsSuccessAction
  | GetCityDetailsFailedAction;
