import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import Main from './Components/Main/Main';


class App extends React.Component {
  state = {
    hasError: false,
    loggedIn: false,
  }

  handleLogIn = () => {
    this.setState({
      loggedIn: true,
    })
  }

  handleReg = () => {
    
  }

  render() {  
    return (
    <div className='App'>
        <Switch>
          <Route path='/welcome' render={(props) => (
            <Landing {...props} 
              loggedIn={this.state.loggedIn} 
              onLog={this.handleLogIn}
              onReg={this.handleReg}
              />
          )}/>
          <Route exact path='/main' render={(props) => (
            <Main {...props} loggedIn={this.state.loggedIn}/>
          )}/>
          <Route path='/' render={() =>(
            <Redirect to='/welcome'/>
          )}/>
        </Switch>
    </div>
  );
}
}
export default App;
