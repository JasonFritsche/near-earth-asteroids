const axios = require("axios");

const api_key = "guyr0tXzoGfaqAlPXnwbIP3OXdbsyLimOqCPmVa5";

export async function getAsteroids(fromDate, toDate) {
  const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${fromDate}&end_date=${toDate}&api_key=${api_key}`);
  return response.data;
}
