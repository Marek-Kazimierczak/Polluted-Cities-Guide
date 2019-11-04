const initialState = [
  { label: "Poland", isoCode: "PL", image: "/assets/poland.svg" },
  { label: "Germany", isoCode: "DE", image: "/assets/germany.svg" },
  { label: "Spain", isoCode: "ES", image: "/assets/spain.svg" },
  { label: "France", isoCode: "FR", image: "/assets/france.svg" }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
