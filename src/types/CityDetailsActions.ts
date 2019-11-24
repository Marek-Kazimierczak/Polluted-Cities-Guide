export const LOADING_DETAILS = "LOADING_DETAILS";
export const GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS";
export const GET_DETAILS_FAILED = "GET_DETAILS_FAILED";

interface LoadingCityDetailsAction {
  type: typeof LOADING_DETAILS;
  payload: string;
}
interface GetCityDetailsSuccessAction {
  type: typeof GET_DETAILS_SUCCESS;
  payload: string;
}
interface GetCityDetailsFailedAction {
  type: typeof GET_DETAILS_FAILED;
  payload: any;
}

export type CityDetailsActionTypes =
  | LoadingCityDetailsAction
  | GetCityDetailsSuccessAction
  | GetCityDetailsFailedAction;
