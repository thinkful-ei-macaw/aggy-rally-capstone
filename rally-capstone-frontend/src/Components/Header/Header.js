import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render(){
        return (
        <div className="header-wrap">
            <h2>Rally!</h2>
            <input class='search' placeholder='Search' type='text' />
            <nav className='header-nav'>
                <ul>
                    <li><Link to="/main/createprofile">Create Match Profile</Link></li>
                    <li>Messages</li>
                    <li>Manage Account</li>
                    <li>Log Out</li>
                </ul>
            </nav>
        </div>
    )}
}
