import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import './Detailed.css';


class Detailed extends Component{
  constructor(){
    super();

    this.state= {
      price: {},
      coin: {}
    }
  }

  componentWillMount(){
    axios.get(`https://www.cryptocompare.com/api/data/coinsnapshotfullbyid/?id=${ this.props.match.params.id }`).then(response=> {
      this.setState({ coin: response.data.Data });
      console.log(response.data.Data);
    })
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${ this.props.match.params.coin }&tsyms=USD`).then(response=> {
      this.setState({ price: response.data });
      // console.log(response.data);
    });


  }

  render(){
    return(
      <div className='detailed-main-container'>
        <NavBar />

        <div className='detailed-body'>
          <h1>{ this.state.coin.General && this.state.coin.General.H1Text }</h1>
          <p>Description:</p>
          <p>{ this.state.coin.General && this.state.coin.General.Description }</p>
          <br/>
          <p>Features:</p>
            <p>{ this.state.coin.General && this.state.coin.General.Features }</p>
          <h3>Current Value: ${ this.state.price.USD }</h3>
        </div>
      </div>
    )
  }
}

export default Detailed;
