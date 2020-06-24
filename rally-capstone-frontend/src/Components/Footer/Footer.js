import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
    render(){
        return (
        <div className="footer-wrap">
            <h3>Rally!</h3>
            <nav className='footer-nav'>
                <ul>
                    <li>About</li>
                    <li>Community Guidelines</li>
                    <li>Support</li>
                </ul>
            </nav>
        </div>
    )}
}
