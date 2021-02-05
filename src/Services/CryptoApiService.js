const CryptoApiService = {

  getTrendingCoins() {
    return fetch(`https://api.coingecko.com/api/v3/search/trending`, {
      method: 'GET',
      headers: {},
    })
    .then(res => 
      (!res.ok)
        ? res.json({error: {message: `Can't retrieve trending crypto.`}})
        : res.json()
    )
  },

  getCoinDescription(id) {
    return fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=false&community_data=false&developer_data=false`, {
      method: "GET",
      headers: {},
    })
    .then(res =>
      (!res.ok)
        ? res.json({error: {message: `Description not available.`}})
        : res.json()
    )
    .then(data => 
      data.description.en  
    )
  }
}


export default CryptoApiService