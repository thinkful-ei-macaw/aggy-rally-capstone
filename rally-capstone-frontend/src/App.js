import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import Main from './Components/Main/Main';
import TokenService from './Components/services/token';

export default class App extends React.Component {
  state = {
    hasError: false,
    loggedIn: false,
  }

  

  handleLogIn = () => {
    this.setState({
      loggedIn: true,
    })
  }

  handleLogOut = () => {
    this.setState({
      loggedIn: false,
    })
  }

  componentDidMount(){
    if(TokenService.hasAuthToken()) {
      this.setState({loggedIn: true})
    }
  }

  render() {  
    return (
        <Switch>
          <Route path='/welcome' render={(props) => (
            <Landing {...props} 
              loggedIn={this.state.loggedIn} 
              onLog={this.handleLogIn}
              />
          )}/>
          <Route exact path='/main' render={(props) => (
            <Main {...props} 
            loggedIn={this.state.loggedIn}
            logOut={this.handleLogOut}
            />
          )}/>
          <Route path='/' render={() =>(
            <Redirect to='/welcome'/>
          )}/>
        </Switch>
  );
}
}
