import React from 'react';
import './header.css';

export default class Header extends React.Component {
    render(){
        return (
        <div className="header-wrap">
            <h2>Rally!</h2>
            <input class='search' placeholder='Search' type='text' />
            <nav className='header-nav'>
                <ul>
                    <li>Active Profiles</li>
                    <li>Messages</li>
                    <li>Manage Account</li>
                    <li>Log Out</li>
                </ul>
            </nav>
        </div>
    )}
}
