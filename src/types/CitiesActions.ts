import { Country } from "./../config/countries";
export const LOADING_CITIES = "LOADING_CITIES";
export const GET_ACTIVE_COUNTRY = "GET_ACTIVE_COUNTRY";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAILED = "GET_CITIES_FAILED";

export const LOADING_IMAGES = "LOADING_IMAGES";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILED = "GET_IMAGES_FAILED";

interface LoadingCitiesAction {
  type: typeof LOADING_CITIES;
  payload: boolean;
}

interface GetActiveCountryAction {
  type: typeof GET_ACTIVE_COUNTRY;
  payload: Country;
}

interface getCitySuccessAction {
  type: typeof GET_CITIES_SUCCESS;
  payload: any[];
}

interface GetCitiesFailedAction {
  type: typeof GET_CITIES_FAILED;
  payload: any;
}

interface LaodingImagesAction {
  type: typeof LOADING_IMAGES;
  payload: boolean;
}

interface GetImagesSuccessAction {
  type: typeof GET_IMAGES_SUCCESS;
  payload: (string | null)[];
}

interface GetImagesFailedAction {
  type: typeof GET_IMAGES_FAILED;
  payload: boolean;
}

export type CitiesActionTypes =
  | LoadingCitiesAction
  | GetActiveCountryAction
  | getCitySuccessAction
  | GetCitiesFailedAction
  | LaodingImagesAction
  | GetImagesSuccessAction
  | GetImagesFailedAction;
