import React from 'react';
import './main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

export default class Main extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                loggedIn: true,
            }
    }

    render(){
        return (
        <div>
            <header>
                <Header />
            </header>
            <main className="main-wrap">
                <Switch>
                    <Route path="/main/createprofile" />

                    <Route path="/main/editprofile" />
                </Switch>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )}
}
