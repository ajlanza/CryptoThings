const CryptoApiService = {

  getTrendingCrypto() {
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
}


export default CryptoApiService