import React, { Component } from 'react';
import './Ciphers.css';

export default class Ciphers extends Component{
  handleSubmit = ev => {
    ev.preventDefault();
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
        <label htmlFor='textToEncrypt'>Text to encrypt</label>
        <textarea />
        <button type='submit'>Submit</button>
      </form>
      <div className='result'></div>
      </>
    );
  }
}