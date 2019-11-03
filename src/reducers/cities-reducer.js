import {
  LOADING_CITIES,
  GET_ACTIVE_COUNTRY,
  GET_CITIES_SUCCESS,
  GET_CITIES_FAILED
} from "../actions";

import {
  LOADING_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILED
} from "../actions";

const initialState = {
  cities: null,
  images: null,
  countryName: null,
  countryIsoCode: null,
  countryImage: null,
  error: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_IMAGES: {
      return { ...state, error: null, loading: true, images: null };
    }
    case GET_IMAGES_SUCCESS: {
      return { ...state, loading: false, images: action.payload };
    }
    case GET_IMAGES_FAILED: {
      return { ...state, error: action.paylaod, loading: false, images: null };
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
      const cities = action.payload.map(object => object.city);
      return {
        ...state,
        cities: cities,
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
