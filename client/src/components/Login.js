import React from 'react';
import axios from 'axios'
class Login extends React.Component {
  state = {
    username: '',
    password: '',
    logged_in: localStorage.getItem('token') ? true : false
  }

  componentDidMount() {
    if (this.state.logged_in) {
      axios.get('/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => {
          this.setState({ username: res.data.username })
        })
        this.props.history.push(`/products`)
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
        this.props.history.push(`/products`)
      })
  }

  render() {
    return (
      <form onSubmit={e => this.handleLogin(e, this.state)}>
        <h4>Log In</h4>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
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

export default Login;