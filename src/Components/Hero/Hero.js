import React, { Component } from 'react';
import './Hero.css';

export default class Hero extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: ['chid', 'currency', 'graphy'],
      index: 0
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(()=> this.changeWord(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  changeWord = () => {
    let index = this.state.index;
    index >= this.state.name.length -1  ? index = 0 : index++;
    this.setState({
      index: index
    })
  }
  render(){
    return(
      <h1 className='hero'>
        Crypto:
      </h1>    
    );
  }
}