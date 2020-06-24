import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
import Main from './Components/Main/Main';


class App extends React.Component {
  state = {
    hasError: false
  }

  render() {  
    return (
    <div className='App'>
        <Switch>
          <Route
            path={'/welcome'}
            component={Landing}
          />
          <Route
            exact
            path={'/main'}
            component={Main}
          />
        </Switch>
    </div>
  );
}
}
export default App;
