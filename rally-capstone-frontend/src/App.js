import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

class App extends React.Component {
  state = {
    
  }

  

  componentDidMount() {

  }

  render() {
    const contextValue = {
      data: this.state,

    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
