const axios = require("axios");

const api_key = process.env.VUE_APP_NEOWS_API_KEY;

export async function getAsteroids() {
  const response = await axios.get(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${api_key}`
  );
  return response.data;
}
