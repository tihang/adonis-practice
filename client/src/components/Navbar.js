import React, { Component } from 'react';
import axios from 'axios';


export default class Navbar extends Component{
  constructor(){
    super();
    this.state = {
      greeting : 'test'
    }
  }

  componentDidMount(){
    axios.get('/navbar')
          .then(res => {
            this.setState({
              greeting : res.data
            });
          });
  }

  render(){
    return (
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>{this.state.greeting}</li>
        </ul>
      </nav>
  );
  }
}


