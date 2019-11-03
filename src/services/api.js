export async function fetchCities(country) {
  const parameter = "pm10";
  const fromDate = "2019-01-01";
  const limit = "100";
  const response = await fetch(
    `https://api.openaq.org/v1/measurements?country=${country}&parameter=${parameter}&sort=desc&order_by=value&date_from=${fromDate}&limit=${limit}`
  );
  const data = await response.json();
  console.log("cities fetch data", data);
  const cities = await data.results;
  return cities;
}

// export async function getCityDetails(city) {
//   const responseId = await fetch(
//     `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${city}&format=json&srlimit=1&origin=*`
//   );
//   const dataId = await responseId.json();
//   const queryId = await dataId.query.search[0].pageid;
//   const responseDescription = await fetch(
//     `https://en.wikipedia.org/w/api.php?action=parse&section=0&pageid=${queryId}&prop=text&format=json&origin=*`
//   );
//   const dataDescription = await responseDescription.json();
//   const desctiptionHTML = await dataDescription.parse.text["*"];

//   return desctiptionHTML;
// }

export async function getCityDetails(city) {
  async function getPageId(searchQuery) {
    const responseId = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchQuery}&format=json&srlimit=1&origin=*`
    );
    const dataId = await responseId.json();
    const queryId = await dataId.query.search[0].pageid;
    return queryId;
  }

  const pageid = await getPageId(city);

  const responseText = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&format=json&redirects&titles=${city}&limit=1&origin=*`
  );
  const dataText = await responseText.json();

  const text = await dataText.query.pages[pageid].extract;

  return text;
}
