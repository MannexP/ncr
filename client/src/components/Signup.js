import React, { Component } from 'react'
import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleSignup = (e) => {
    e.preventDefault();
    const payload ={
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    axios.post('/api/users/', payload)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.setState({
          logged_in: true,
          username: res.data.username
        })
        this.props.history.push(`/products`)
      })
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.handleSignup(e)}>
        <h4>Sign Up</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Signup;