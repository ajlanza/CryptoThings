import React, { Component } from 'react';
import './Currency.css';
import CryptoApiService from '../../Services/CryptoApiService';

export default class Currency extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      trending: [],
      error: null
    };
  }

  componentDidMount() {
    CryptoApiService.getTrendingCrypto()
    .then(data => {
      this.setState({
        trending: data,
        isLoading: false,
      })
    }) 
    .catch(error => this.setState({error, isLoading: false})); 
  }

  render(){
    const { isLoading, trending, error } = this.state; 
    console.log(trending)
    return (
      <>
      <h1>Crypto:Currency</h1>
      {error ? <p>{error.message}</p> : ''}
      {!isLoading 
        ? <>
          <h2>Top 7 trending cryptocurrencies from <a href='https://www.coingecko.com/en'>CoinGecko</a></h2>
          <ul>
            {trending.coins.map(coin => 
              <li key={coin.item.id}><img src={coin.item.thumb} alt={`${coin.item.name} logo`} />{coin.item.name}</li>)}     
          </ul>
          </>
          
        : (<p>Loading</p>)
      }      
      </>
    );
  }
}