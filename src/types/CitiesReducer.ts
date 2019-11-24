export interface CitiesState {
  cities: string[];
  images: (string | null)[];
  measurements: ({ parameter: string; unit: string; value: number } | null)[];
  countryName: string | null;
  countryIsoCode: string | null;
  countryImage: string | null;
  error: null | any;
  loading: boolean;
}
