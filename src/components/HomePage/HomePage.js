import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import './HomePage.css';
//https://www.cryptocompare.com/${ coin.ImageUrl }

class HomePage extends Component{
  constructor(){
    super();

    this.state= {
      coinList: []
    }
    this.addFavorite= this.addFavorite.bind(this);
  }

  componentWillMount(){
    axios.get('http://localhost:3001/api/currencies').then(response=> {
      this.setState({ coinList: Object.keys(response.data.Data).map(key=> response.data.Data[key]) });
    });
  }

  addFavorite(){
    //axios.post this coin to the database with user id
  }


  render() {
    {console.log('coinList', this.state.coinList)}
    const coins= this.state.coinList.map((coin, index)=> {
      return(
        <Link to={ `/detailed/${ coin && coin.Name }/${ coin && coin.Id }` } key={ index }>
          <div className='coin-container'>
            <h3>{ coin && coin.CoinName } ({ coin && coin.Name })</h3>
            <img className='coin-logo' src={ `www.cryptocompare.com/${ coin && coin.ImageUrl }` } alt='coin-logo'></img>
            <p>Algorithm: { coin && coin.Algorithm}</p>

            <button className='btn fav-btn' onClick={ this.addFavorite }> Add to Favorites </button>
          </div>
        </Link>
      )
    })
    return (
      <div className='homepage-container'>
        <NavBar />
        <div className='homepage-body'>
          <div className='homepage-header'>
            <h1>LITcoins</h1>
            <hr/>
          </div>
          {coins}
          </div>
        </div>
    );
  }
}

export default HomePage;