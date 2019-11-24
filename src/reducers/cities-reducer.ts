import {
  LOADING_CITIES,
  GET_ACTIVE_COUNTRY,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED,
  LOADING_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILED,
  CitiesActionTypes,
  CitiesState
} from "../types";

const initialState: CitiesState = {
  cities: null,
  images: null,
  measurements: null,
  countryName: null,
  countryIsoCode: null,
  countryImage: null,
  error: null,
  loading: false
};

export default function(state = initialState, action: CitiesActionTypes) {
  switch (action.type) {
    case LOADING_IMAGES: {
      return { ...state, error: null, loading: true, images: null };
    }
    case GET_IMAGES_SUCCESS: {
      return { ...state, loading: false, images: action.payload };
    }
    case GET_IMAGES_FAILED: {
      return { ...state, error: action.payload, loading: false, images: null };
    }
    case LOADING_CITIES: {
      return { ...state, error: null, loading: true, cities: null };
    }
    case GET_ACTIVE_COUNTRY: {
      const { label, isoCode, image } = action.payload;
      return {
        ...state,
        countryName: label,
        countryIsoCode: isoCode,
        countryImage: image
      };
    }
    case GET_CITIES_SUCCESS: {
      const cities = action.payload.map((object: any) => object.city);
      const measurements = action.payload.map((object: any) => ({
        parameter: object.parameter,
        unit: object.unit,
        value: object.value
      }));
      return {
        ...state,
        cities,
        measurements,
        loading: false
      };
    }
    case GET_CITIES_FAILED: {
      return { ...state, error: action.payload, loading: false };
    }

    default:
      return state;
  }
}
