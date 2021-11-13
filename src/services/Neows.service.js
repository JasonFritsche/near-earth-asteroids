const axios = require("axios");

const api_key = process.env.VUE_APP_NEOWS_API_KEY;

export async function getAsteroidsResgetAsteroids(fromDate, toDate) {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fromDate}&end_date=${toDate}&api_key=${api_key}`
  );
  return response.data;
}
