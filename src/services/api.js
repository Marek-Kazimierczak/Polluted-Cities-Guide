export async function fetchCities(country) {
  const parameter = "pm10";

  const fromDate = "2019-01-01";

  const limit = "100";

  const response = await fetch(
    `https://api.openaq.org/v1/measurements?country=${country}&parameter=${parameter}&sort=desc&order_by=value&date_from=${fromDate}&limit=${limit}`
  );

  const data = await response.json();

  const cities = await data.results;

  return cities;
}

export async function getCityDetails(city) {
  const responseText = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&redirects&titles=${city}&limit=1&origin=*`
  );

  const dataText = await responseText.json();

  const pageId = await Object.keys(dataText.query.pages)[0];

  const text = await dataText.query.pages[pageId].extract;

  return text;
}

export async function getCityImage(city) {
  const responseImage = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&titles=${city}&origin=*`
  );

  const dataImage = await responseImage.json();

  const pageId = await Object.keys(dataImage.query.pages)[0];

  const image = (await dataImage.query.pages[pageId].hasOwnProperty(
    "thumbnail"
  ))
    ? dataImage.query.pages[pageId].thumbnail.source
    : null;

  return image;
}
