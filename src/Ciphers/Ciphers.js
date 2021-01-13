import React, { Component } from 'react';
import './Ciphers.css';

export default class Ciphers extends Component{
  constructor(props){
    super(props);
      this.state = {
        answer: ''
      };
    }
  
  handleTextInput = ev =>{
    this.setState({
      answer: ev
    })
  } 
    
  handleSubmit = ev => {
    ev.preventDefault();
    // this.setState({
    //   answer: 'changed'
    // })
    console.log('clicked');
  }


  render(){
    return (
      <>
      <h1>Crypto:Graphy & Ciphers</h1>
      <form className='cipherForm'>
        <label htmlFor='cipherType'>Cipher Type</label>
        <select required name='type' id='type'>
            <option>ceaser</option>
            <option>substitution</option>
        </select>
        <label htmlFor='textToEncrypt' onChange={this.handleTextInput}>Text to encrypt</label>
        <textarea name='textToEncrypt' id='textToEncrypt'/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      <div className='result'>{this.state.answer}</div>
      </>
    );
  }
}