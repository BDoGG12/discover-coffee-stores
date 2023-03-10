const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export const fetchCoffeeStores = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.FOURSQUARE_API_KEY
    }
  };

  const response = await fetch(getUrlForCoffeeStores('41.91570885658326%2C-87.69079767652433', 'coffee', 6), options);
  const data = await response.json()
  return data.results;
};