import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {

container = React.createRef();

    state = {
      open: false,
      loggedIn: false
    };
  
    handleMenuClick = () => {
      this.setState({
        open: !this.state.open,
      });
    };
    
    handleCloseMenu = e => {
      if (this.container.current && !this.container.current.contains(e.target)) {
        this.setState({
          open: false,
        });
      }
    };
  
    componentDidMount() {
      document.addEventListener("mousedown", this.handleCloseMenu);
    }
  
    componentWillUnmount() {
      document.removeEventListener("mousedown",this.handleCloseMenu);
    }
  render(){
    return(
      <div>
        {/* MOBILE CONTAINER */}
        <div className="hideThis">
          <div className="navContainer" ref={this.container}>
            <button type="button" className="button" onClick={this.handleMenuClick}>☰</button>
            {this.state.open && (
              <div className="dropdown">
                <ul>
                  <li>
                    <Link to='/' className='mobileNavLink'  onClick={this.handleMenuClick}>
                      Home{"  "}
                    </Link>
                  </li>
                  <li>
                    <Link to='/creatures' className='mobileNavLink' onClick={this.handleMenuClick}>
                      Creatures
                    </Link>
                  </li>
                  <li>
                    <Link to='/currency' className='mobileNavLink' onClick={this.handleMenuClick}>
                      Currency
                    </Link>
                  </li>
                  <li>
                    <Link to='/ciphers' className='mobileNavLink' onClick={this.handleMenuClick}>
                      Ciphers
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* FULL SITE CONTAINER */}
        <div className='bigScreenContainer' >
          <div className='homeLink'>
            <Link to='/' className='navLink' >
              Crypto:
            </Link>
          </div>

          
          <ul className='otherLinks'>          
          <li>
          <Link to='/creatures' className='navLink'>
            Creatures
          </Link>
          </li>
          <li>
          <Link to='/currency' className='navLink'>
            Currency
          </Link>
          </li>
          <li>
          <Link to='/ciphers' className='mobileNavLink' onClick={this.handleMenuClick}>
            Ciphers
          </Link>
          </li>
          </ul>
        </div>
      </div>
    )
  }
}