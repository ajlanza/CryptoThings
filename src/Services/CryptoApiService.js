
// import config from '../config'

// const CryptoApiService = {
//   postLogin(credentials) {
//     return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(credentials),
//     })
//       .then(res =>
//         (!res.ok)
//           ? res.json().then(e => Promise.reject(e))
//           : res.json()
//       )
//   },

//   getUser(user_id) {
//     return fetch(`${config.API_ENDPOINT}/api/users/${user_id}`, {
//       method: 'GET',
//       headers: {},
//     })
//     .then(res => 
//       (!res.ok)
//         ? res.json({error: {message: `Can't retrieve user.`}})
//         : res.json()
//     )
//   },
  
//   postUser(user) {
//     return fetch(`${config.API_ENDPOINT}/api/users`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     })
//       .then(res => 
//         (!res.ok)
//           ? res.json().then(e=> Promise.reject(e))
//           : res.json()
//       )
//   },

//   getFriends(user) {
//     return fetch(`${config.API_ENDPOINT}/api/friends/${user}`, {
//       method: 'GET',
//       headers: {},
//     })
//     .then(res => 
//       (!res.ok)
//         ? res.json({error: {message: 'No friends'}})
//         : res.json()
//     )
//   },

//   addFriend(friend) {
//     return fetch(`${config.API_ENDPOINT}/api/friends`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(friend),
//     })
//       .then(res =>
//         (!res.ok)
//           ? res.json().then(e=> Promise.reject(e))
//           : res.json()
//       )
//   },

//   updateFriend(friendship) {
//     return fetch(`${config.API_ENDPOINT}/api/friends`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(friendship),
//     })
//       .then(res =>
//         (!res.ok)
//          ? res.json().then(e => Promise.reject(e))
//          : res.json()
//       )
//   },

//   getWagers(user) {
//     return fetch(`${config.API_ENDPOINT}/api/mywagers/${user}`, {
//       method: 'GET',
//       headers: {},
//     })
//     .then(res => 
//       (!res.ok)
//         ? res.json({error: {message: 'No wagers'}})
//         : res.json()
//     )
//   },

//   postWager(newWager) {
//     return fetch(`${config.API_ENDPOINT}/api/wagers`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(newWager),
//     })
//       .then(res =>
//         (!res.ok)
//           ? res.json().then(e=> Promise.reject(e))
//           : res.json()
//       )

//   },

//   updateWager(wager) {
//     return fetch(`${config.API_ENDPOINT}/api/wagers`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(wager),
//     })
//       .then(res =>
//         (!res.ok)
//          ? res.json().then(e => Promise.reject(e))
//          : res.json()
//       )
//   },

//   assignWinner(wager) {
//     return fetch(`${config.API_ENDPOINT}/api/wagers`, {
//       method: 'PATCH',
//       headers: {
//         'content-type': 'application/json',
//       },
//       body: JSON.stringify(wager),
//     })
//       .then(res =>
//         (!res.ok)
//          ? res.json().then(e => Promise.reject(e))
//          : res.json()
//       )
//   },

// }



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