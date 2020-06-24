import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Button } from '../Utility/Utility'

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
    }

    handleButtonReg = (e) => {
        e.preventDefault()
        this.setState({ reg: true})
    }

    handleButtonCan = (e) => {
        e.preventDefault()
        this.setState({ log: false, reg: false })
    }

    display = () => {
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
                <Login />
                <Button id="cancel" onClick={this.handleButtonCan}>Back</Button>
            </>
        }
    }

    render(){
        return (
        <div className="landing-wrap">
            <h1>Rally!</h1>
            {this.display()}
        </div>
    )}
}
