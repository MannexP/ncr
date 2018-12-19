import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components';


const LoginStyle = styled.div`
height:100vh;
display: flex;
justify-content: center;



`
const Header = styled.div`
/* display: flex;
justify-content: center; */
/* margin: 0 auto; */
color: #3C3C3C;
h1{
  font-size: 4rem;
}
`
const Forms = styled.div`
display: flex;
justify-content: center;
border-style: groove;
height: 50vh;
width: 20vw;
border-radius: 15px;
margin-top: 20vh;

`


class Login extends Component {
  state = {
    username: '',
    password: '',
    logged_in: localStorage.getItem('token') ? true : false
  }

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get('/api/current_user/')
        .then(res => {
          this.setState({ username: res.data.username })
        })
      this.props.history.push(`/profile`)
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    })
  }

  handleLogin = (e, data) => {
    e.preventDefault();
    axios.post('/token-auth/', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.setState({
          logged_in: true,
          username: res.data.user.username
        })
        this.props.history.push(`/profile`)
      })
  }

  render() {
    return (
      <LoginStyle>
        
          
       
        <Forms>
          <div>
        <h1>Log In</h1>
          <form onSubmit={e => this.handleLogin(e, this.state)}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <div></div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div></div>
            <input type="submit" />
          </form>
          </div>
        </Forms>
      </LoginStyle>
    );
  }
}

export default Login;
