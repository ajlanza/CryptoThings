import React, { Component } from 'react';
import data from '../../Assets/data';
import './Ciphers.css';
import CipherHelpers from '../../Services/CipherHelpers';


export default class Ciphers extends Component{
  constructor(props){
    super(props);
      this.state = {
        encrypted: '',
        cipherType: 'ceaser',
        shift: 'Enter a number'
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
    if(!shift){
      shift = 'Enter a number';
    }
    this.setState({
      shift: shift,
    });
  }
    
  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({
       encrypted: CipherHelpers[this.state.cipherType](this.state.toEncrypt, this.state.shift)
    });
  }

  render(){
    return (
      <>
      <h1>Crypto:Graphy & Ciphers</h1>
      <form className='cipherForm'>
        <label htmlFor='cipherType'>Cipher Type</label>
        <select required name='type' id='type' onChange={this.handleCipherType}>
          {data.cipher.map(cipher =>
            <option value={cipher.name} key={cipher.name} shift={cipher.shift}>{cipher.type}</option>
          )}
        </select>
        {/* {data.cipher.map(cipher =>{
          if(cipher.name === this.state.cipherType) {
            console.log(cipher.description);
          }})} */}
        
        {this.state.cipherType === 'ceaser' || this.state.cipherType === 'railFence'
          ? <>
            <label htmlFor='cipherType'>Shift/Key:</label>
            <input type='number' name='shift' id='shift' onChange={this.handleShift} placeholder={this.state.shift}/>
            </>
          : ''
        }
        <label htmlFor='textToEncrypt'>Text to encrypt</label>
        
        <textarea name='textToEncrypt' id='textToEncrypt' onChange={this.handleTextInput} />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
      <h2>Encrypted</h2>
      <div className='result'><p>{this.state.encrypted}</p></div>
      </>
    );
  }
}