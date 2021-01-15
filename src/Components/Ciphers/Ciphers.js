import React, { Component } from 'react';
import './Ciphers.css';
import CipherHelpers from '../../Services/CipherHelpers';


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
    if(shift > 26 || shift < -26){
      shift = shift % 26;
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
            <option value='ceaser'>Ceaser</option>
            <option value='atbash'>Atbash</option>
            <option value='rot13'>ROT13</option>
            <option value='railFence'>Rail-fence</option> 
        </select>
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
      <div className='result'><p>{this.state.encrypted}</p></div>
      </>
    );
  }
}