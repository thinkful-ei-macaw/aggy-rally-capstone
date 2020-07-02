import React from 'react';
import './header.css';
import { Button } from '../Utility/Utility';

export default class Header extends React.Component {
    constructor(props){
        super(props)
            this.state = {

            }
    }

    


    render(){
        return (
        <div className="header-wrap">
            <h2 className="header-h">Rally!</h2>
            <input className='search' placeholder='Placeholder!' type='text' />
            <nav className='header-nav'>
                <ul>
                    <li><Button onClick={this.props.viewCreate}>Create New Profile</Button></li>
                    <li><Button onClick={this.props.viewProfile}>View Active Profile</Button></li>
                    <li><Button onClick={this.props.viewMain}>Return to Main</Button></li>
                    <li><Button onClick={this.props.viewMatch}>View Matches</Button></li>
                    <li><Button onClick={this.props.handleLogOut}>Log out</Button></li>
                </ul>
            </nav>
        </div>
    )}
}
