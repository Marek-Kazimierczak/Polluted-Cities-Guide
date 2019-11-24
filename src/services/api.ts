import { dustParameter, startDate, resultsLimit } from "../config/apiParams";

export async function fetchCities(country: string): Promise<any> {
  const response = await fetch(
    `https://api.openaq.org/v1/measurements?country=${country}&parameter=${dustParameter}&sort=desc&order_by=value&date_from=${startDate}&limit=${resultsLimit}`
  );

  const data = await response.json();

  const cities = data.results;

  return cities;
}

export async function getCityDetails(city: string): Promise<any> {
  const responseText = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&redirects&titles=${city}&limit=1&origin=*`
  );

  const dataText = await responseText.json();

  const pageId = Object.keys(dataText.query.pages)[0];

  const text = dataText.query.pages[pageId].extract;

  return text;
}

export async function getCityImage(city: string): Promise<any> {
  const responseImage = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&titles=${city}&origin=*`
  );

  const dataImage = await responseImage.json();

  const pageId = Object.keys(dataImage.query.pages)[0];

  const image = dataImage.query.pages[pageId].hasOwnProperty("thumbnail")
    ? dataImage.query.pages[pageId].thumbnail.source
    : null;

  return image;
}
