import React, { Component } from 'react';
// import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './Favorites.css';


class Favorites extends Component{
  constructor(){
    super();

    this.state= {
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <h1>My Favorites</h1>
      </div>
    )
  }
}

export default Favorites;
