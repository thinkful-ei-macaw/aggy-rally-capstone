import React from 'react';
import './footer.css';
import { Button } from '../Utility/Utility';

export default class Footer extends React.Component {
    render(){
        return (
        <div className="footer-wrap">
            <nav className='footer-nav'>
                <ul>
                    <li><Button>About</Button></li>
                    <li><Button>Community Guidelines</Button></li>
                    <li><Button>Support</Button></li>
                </ul>
            </nav>
        </div>
    )}
}
