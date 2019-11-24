import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchCities, getCityImage } from "../services/api";
import { getUniqueRecords } from "../helpers/getUniqueRecords";
import {
  LOADING_CITIES,
  GET_ACTIVE_COUNTRY,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED,
  LOADING_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILED
} from "../types";
import { Country } from "../config/countries";

export const getCities = (
  country: Country
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async function(
    dispatch: ThunkDispatch<{}, {}, AnyAction>
  ): Promise<void> {
    dispatch({ type: LOADING_CITIES, payload: true });
    dispatch({ type: GET_ACTIVE_COUNTRY, payload: country });

    try {
      const cities = await fetchCities(country.isoCode);
      const uniqueCities = await getUniqueRecords(cities, "city");
      const tenUniqueCities = await uniqueCities.slice(0, 10);

      dispatch({
        type: GET_CITIES_SUCCESS,
        payload: tenUniqueCities
      });
    } catch (error) {
      dispatch({ type: GET_CITIES_FAILED, payload: error });
    }
  };
};

export const getCitiesImages = (
  cities: string[]
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async function(
    dispatch: ThunkDispatch<{}, {}, AnyAction>
  ): Promise<void> {
    dispatch({ type: LOADING_IMAGES, payload: true });

    try {
      const citiesImages = Promise.all(
        cities.map((city: string) => getCityImage(city))
      ).then(images => {
        dispatch({
          type: GET_IMAGES_SUCCESS,
          payload: images
        });
      });
      return citiesImages;
    } catch (error) {
      dispatch({ type: GET_IMAGES_FAILED, payload: error });
    }
  };
};
