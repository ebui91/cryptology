import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component{
  render(){
    return(
      <div className='nav-main-container'>
        <div className='nav-left'>
          <Link to='/'>
            <h2>CRYPTOLOGY</h2>
          </Link>
        </div>

        <div className='nav-mid'>
          <Link to='/favorites'>
            <p>FAVORITES</p>
          </Link>
        </div>

        <div className='nav-right'>
          <button className='btn log-btn'>LOGIN</button>
        </div>
      </div>
    )
  }
}

export default NavBar;
