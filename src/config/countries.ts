export interface Country {
  [key: string]: string;
}

export const countries: Country[] = [
  { label: "Poland", isoCode: "PL", image: "/assets/poland.svg" },
  { label: "Germany", isoCode: "DE", image: "/assets/germany.svg" },
  { label: "Spain", isoCode: "ES", image: "/assets/spain.svg" },
  { label: "France", isoCode: "FR", image: "/assets/france.svg" }
];
