import React, { Component } from 'react';
import axios from 'axios';


export default class Login extends Component{
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      jwtToken : 'N/A. Login first'
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/login', { email: this.state.email, password: this.state.password })
          .then(res => {
            this.setState({
              jwtToken: res.data.token.token
            })
            console.log(res.data)
          })
          .catch(err=> {
            if(err.response.status === 401){
              this.setState({
                jwtToken: 'Wrong email/password. Try again'
              });
            }
          })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="email" type="text" placeholder="email" onChange={this.handleChange}></input>
          <input name="password" type="password" placeholder="password" onChange={this.handleChange}></input>
          <button>Submit</button>
        </form>

        <h4>{this.state.jwtToken}</h4>
      </div>

  );
  }
}


