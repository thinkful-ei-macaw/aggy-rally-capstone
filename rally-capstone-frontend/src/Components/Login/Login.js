import React, { Component } from 'react';
import { Input, Button, Required } from '../Utility/Utility';
import TokenService from '../services/token';
import AuthApi from '../services/auth-api';

export default class Login extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    state = {
        error: null
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
        this.setState({
            error: null
        })

        AuthApi.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    render() {
        const { error } = this.state
        return (
            <form  className='LoginForm' onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                   {error && <p className='oops'>{error}</p>}
               </div>
                <div className='user'>
                    <label htmlFor='Login__user'>
                        User Name
                    <Required /></label>
                    <Input
                        required
                        name='user_name'
                        id='Login__user'
                    >
                    </Input>
                </div>
                <div className='password'>
                    <label htmlFor='Login__password'>
                        Password
                    <Required /></label>
                    <Input
                        required
                        name='password'
                        type='password'
                        id='Login__password'
                    >
                    </Input>
                </div>
                <Button type='submit'>
                    Login
                </Button>
            </form>
        )
    }
}