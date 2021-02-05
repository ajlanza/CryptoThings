import React, { Component } from 'react';
import './Currency.css';
import CryptoApiService from '../../Services/CryptoApiService';

export default class Currency extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      trending: [],
      error: null,
      currentCoin: null,
      description: null,
      // hide: true
    };
  }

  componentDidMount() {
    CryptoApiService.getTrendingCoins()
    .then(data => {
      this.setState({
        trending: data,
        isLoading: false,
      })
    }) 
    .catch(error => this.setState({error, isLoading: false})); 
  }

  showCoinDescription(id) {
    CryptoApiService.getCoinDescription(id)
    .then(data => {
      this.setState({
        description: data,
        currentCoin: id,
      })
    })
    .catch(error => this.setState({error}));
  }

  render(){
    const { isLoading, trending, error, currentCoin } = this.state; 
   
    return (
      <>
      <h1>Crypto:Currency</h1>
      {error ? <p>{error.message}</p> : ''}
      {!isLoading 
        ? <>
          <h2>Top 7 trending cryptocurrencies from <a href='https://www.coingecko.com/en'>CoinGecko</a></h2>
          <ul>
            {trending.coins.map(coin => 
            <div key={coin.item.id}>
              <li>
                <img src={coin.item.thumb} alt={`${coin.item.name} logo`} />
                <button type='button' onClick={() => this.showCoinDescription(coin.item.id)}>{coin.item.name}</button>
              </li>
              {currentCoin === coin.item.id 
                ? <li key={coin.item.name}>{this.state.description}</li>
                : ''
              }
              </div>)}     
          </ul>
          </>
          
        : (<p>Loading</p>)
      }      
      </>
    );
  }
}