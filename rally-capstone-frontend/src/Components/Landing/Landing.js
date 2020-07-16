import React from 'react';
import './landing.css'
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Button } from '../Utility/Utility';
import { Redirect } from 'react-router-dom';

export default class Landing extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                log: false,
                reg: false,
            }
    }

    handleButtonLog = (e) => {
        e.preventDefault()
        this.setState({ log: true})
        //async in here for splash
    }

    handleButtonReg = (e) => {
        e.preventDefault()
        this.setState({ reg: true})
    }

    handleButtonCan = (e) => {
        e.preventDefault()
        this.setState({ log: false, reg: false })
    }

    displayLanding = () => {
        if(this.state.log === false && this.state.reg === false){
            return <>
                <Button id="log-in" onClick={this.handleButtonLog}>Log In</Button>
                <Button id="reg" onClick={this.handleButtonReg}>Register</Button>
            </>
        }else if(this.state.log === false && this.state.reg === true){
            return <>
                <Register />
                <Button id="cancel" onClick={this.handleButtonCan}>Back</Button>
            </>
        }else if(this.state.log === true && this.state.reg === false){
            return <>
                <Login onLoginSuccess={this.props.onLog}/>
                <Button id="cancel" onClick={this.handleButtonCan}>Back</Button>
            </>
        }
    }

    render(){
        if(this.props.loggedIn === true){
            return <Redirect to='/main'/>
        }
        return (
        <div className="landing-wrap">
            <h1>Rally!</h1>
            {this.displayLanding()}
            <div className="landing-instructions">
                <h3>For Testers!</h3>
                <p>Username: tester, Password: testerpass</p>
                <p>Log in here, or register if desired, and navigate to Create New Profile to get started. Further instructions on main.</p>
            </div>
        </div>
    )}
}
