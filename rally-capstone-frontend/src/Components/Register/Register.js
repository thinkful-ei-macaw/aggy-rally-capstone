import React, { Component } from 'react';
import AuthApi from '../services/auth-api';
import { Required, Button, Input } from '../Utility/Utility'

export default class Register extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = {
        error: null,
    }

    handleSubmit = ev => {
        ev.preventDefault()
        const { user_name, password, confirm__password } = ev.target.elements

        if(confirm__password.value !== password.value){
            return 'Passwords did not match'
        }

        AuthApi.postUser({
            user_name: user_name.value,
            password: password.value,
        })
            .then(user => {
                user_name.value = ''
                password.value = ''
                confirm__password.value = ''
                this.props.onRegistrationSuccess()
                //this.setState({ error: null })
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    render() {
        const { error } = this.state
        return (
           <form className='Register' onSubmit={this.handleSubmit}>
               <div role='alert'>
                   {error && <p className='oops'>{error}</p>}
               </div>
               <div className='user'>
                   <label htmlFor='Register__user_name'>Username<Required /></label>
                   <Input 
                    name='user_name'
                    type='text'
                    required
                    id='Register__user_name'
                   >
                   </Input>
               </div>
               <div className='password'>
                   <label htmlFor='Register__password'>Password<Required /></label>
                   <Input 
                    name='password'
                    type='password'
                    required
                    id='Register__password'
                   >
                   </Input>
               </div>
               <div className='password'>
                   <label htmlFor='Register__password'>Confirm Password<Required /></label>
                   <Input 
                    name='confirm__password'
                    type='password'
                    required
                    id='Register__password__two'
                   >
                   </Input>
               </div>
               <Button type='submit'>
                   Register
               </Button>
           </form>
        )
    }

}