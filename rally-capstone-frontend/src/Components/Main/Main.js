import React from 'react';
import './main.css';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Profile from '../MyProfile/Profile';
import Matches from '../Matches/Matches';
import TokenService from '../services/token';

export default class Main extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                loggedIn: true,
                default: true,
                creating: false,
                viewing: false,
                matching: false
            }
    }

    viewCreate = (e) => {
        e.preventDefault()
        this.setState({ 
            creating: true,
            matching: false,
            viewing: false,
            default: false
        })
    }

    viewProfile = (e) => {
        e.preventDefault()
        this.setState({ 
            viewing: true,
            creating: false,
            matching: false,
            default: false
        })
    }

    viewMain = (e) => {
        e.preventDefault()
        this.setState({ 
            default: true,
            matching: false,
            viewing: false, 
            creating: false
        })
    }

    viewMatch = (e) => {
        e.preventDefault()
        this.setState({ 
            matching: true,
            viewing: false, 
            creating: false,
            default: false
        })
    }

    handleLogout = (e) => {
        e.preventDefault()
        this.setState({ 
            loggedIn: false,
        })
        TokenService.clearAuthToken()
    }

    displayMain = () => {
        if(this.state.loggedIn === false){
            return <>
                <Redirect to="/welcome"/>
            </>
        }else if(this.state.default === true && this.state.viewing === false && this.state.matching === false && this.state.creating === false){
            return <>
                <div className="default-wrap">
                    <h3>How-to</h3>
                    <p>Placeholder text about how to use this service</p>
                    <h3>Upcoming</h3>
                    <p>Placeholder text about upcoming features</p>
                    <h3>Advice</h3>
                    <p>Placeholder text about helpful advice for forming a cohesive and stable roleplaying group</p>
                </div>
            </>
        }else if(this.state.viewing === true && this.state.creating === false && this.state.matching === false && this.state.default === false){
            return <>
                <Profile />
            </>
        }else if(this.state.matching === true && this.state.creating === false && this.state.viewing === false && this.state.default === false){
            return <>
                <Matches />
            </>
        }else if(this.state.creating === true && this.state.viewing === false && this.state.matching === false && this.state.default === false){
            return <>
                <Form />
            </>
    }}

    render(){
        return (
        <div>
            <header>
                <Header 
                viewCreate={this.viewCreate} 
                viewProfile={this.viewProfile} 
                viewMain={this.viewMain}
                viewMatch={this.viewMatch}
                handleLogout={this.handleLogout}
                />
            </header>
            <main className="main-wrap" id="wrap">
                <h1>Rally!</h1>
                {this.displayMain()}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )}
}
