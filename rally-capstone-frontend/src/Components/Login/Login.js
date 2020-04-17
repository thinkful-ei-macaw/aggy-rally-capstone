import React, { Component } from 'react';

export default class Login extends Component {


    state = {
        error: null
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({
            error: null
        })
        const { user_name, password } = ev.target

        
    }
}