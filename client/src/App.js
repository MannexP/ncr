import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

const { Header } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >

            {
                this.props.isAuthenticated ?

                <Menu.Item key="2" onClick={this.props.logout}>
                    Logout
                </Menu.Item>

                :

                <Menu.Item key="2">
                    <Link to="/login">Login</Link>
                </Menu.Item>
            }
            </Menu>
            <Switch>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route path="/" component={HomePage}/>
            </Switch>
          </Header>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.logout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
