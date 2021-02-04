import React, { Component } from 'react';
import CryptoApiService from '../../Services/CryptoApiService';

export default class Currency extends Component{
  constructor(props) {
    super(props);
    this.state = {
      trending: [],
    };
  }

  componentDidMount() {
    let crypto = [];
    CryptoApiService.getTrendingCrypto()
    .then(data => {
      data.coins.map(item => crypto.push(item.item.id)
    )})
    .then(
      this.setState({
        trending: crypto,
      })
    );
    console.log('didmount state', this.state)
  } 
  
  // getCrypto() {
  //     let crypto = [];
  //     CryptoApiService.getTrendingCrypto()
  //     .then(data => {
  //       data.coins.map(item => crypto.push(item.item.id)
  //     )})
  //     console.log('getcrypto', crypto);
  //     return crypto;
  // }

  render(){

    return (
      <>
      <h1>Crypto:Currency</h1>
      <ul>
        {this.state.trending.length > 0 
          ? this.state.trending.map(coin => <li key={coin}>{coin}</li>)
          : <li>Trending crypto not found</li>
        }      
      </ul>
      {console.log(this.state)}
      </>
    );
  }
}