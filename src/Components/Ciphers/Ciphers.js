import React, { Component } from 'react';
import './Ciphers.css';

export default class Ciphers extends Component{
  constructor(props){
    super(props);
      this.state = {
        answer: '',
        encrypted: '',
        cipherType: 'ceaser',
        shift: 0
      };
    }
  
  handleTextInput = ev =>{
    this.setState({
      toEncrypt: ev.target.value
    });
  } 

  handleCipherType = ev =>{
    this.setState({
      cipherType: ev.target.value,
    });
  }

  handleShift = ev =>{
    let shift = parseInt(ev.target.value);
    if(shift === null || shift === undefined || isNaN(shift)) {
      shift = 0;
    }
    if(shift > 26){
      shift = shift % 26;
    }
    this.setState({
      shift: shift,
    });
  }
    
  handleSubmit = ev => {
    ev.preventDefault();
    const toEncrypt = this.state.toEncrypt;
    const shift = this.state.shift;
    let encrypted = '';
    let encryptedAsciiChar = '';
    for(let i = 0; i < toEncrypt.length; i++){
      let asciiChar = toEncrypt.charCodeAt(i);
      if(asciiChar >= 65 && asciiChar <= 90) {
        encryptedAsciiChar = asciiChar + shift;
        if(encryptedAsciiChar > 90) {
          encryptedAsciiChar = encryptedAsciiChar - 90 + 64;
        }
        encrypted += String.fromCharCode(encryptedAsciiChar);
        continue;
      }
      if(asciiChar >= 97 && asciiChar <= 122) {
        encryptedAsciiChar = asciiChar + shift;
        if(encryptedAsciiChar > 122) {
          encryptedAsciiChar = encryptedAsciiChar - 122 + 96;
        }
        encrypted += String.fromCharCode(encryptedAsciiChar);
        continue;
      }
      else{
        encrypted += toEncrypt.charAt(i);
      }   
    }
    this.setState({
      encrypted: encrypted,
    })
    console.log(this.state.encrypted);
  }


  render(){
    return (
      <>
      <h1>Crypto:Graphy & Ciphers</h1>
      <form className='cipherForm'>
        <label htmlFor='cipherType'>Cipher Type</label>
        <select required name='type' id='type' onChange={this.handleCipherType}>
            <option value ='ceaser'>ceaser</option>
            <option value ='substitution'>substitution</option>
        </select>
        {this.state.cipherType === 'ceaser' 
          ? <>
            <label htmlFor='cipherType'>Shift:</label>
            <input type='number' name='shift' id='shift' onChange={this.handleShift}/>
            </>
          : ''
        }
        <label htmlFor='textToEncrypt'>Text to encrypt</label>
        
        <textarea name='textToEncrypt' id='textToEncrypt' onChange={this.handleTextInput}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      <div className='result'><p>{this.state.encrypted}</p></div>
      </>
    );
  }
}