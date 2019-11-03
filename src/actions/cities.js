import { fetchCities } from "../services/api";
import { getUniqueRecords } from "../helpers/getUniqueRecords";

export const LOADING_CITIES = "LOADING_CITIES";
export const GET_ACTIVE_COUNTRY = "GET_ACTIVE_COUNTRY";
export const GET_CITIES_SUCCESS = "GET_CITIES_SUCCESS";
export const GET_CITIES_FAILED = "GET_CITIES_FAILED";

export const getCities = country => {
  return async function(dispatch) {
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
    } finally {
      dispatch({ type: LOADING_CITIES, payload: false });
    }
  };
};
