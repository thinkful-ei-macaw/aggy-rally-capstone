import React from 'react';
import './footer.css';
import { Button } from '../Utility/Utility';

export default class Footer extends React.Component {
    constructor(props){
        super(props)
            this.state ={
                
            }
    }


    render(){
        return (
        <div className="footer-wrap">
            <nav className='footer-nav'>
                <ul>
                    <li><Button onClick={this.props.viewAbout}>About</Button></li>
                    <li><Button onClick={this.props.viewCommunity}>Community Guidelines</Button></li>
                    <li><Button onClick={this.props.viewSupport}>Support</Button></li>
                </ul>
            </nav>
        </div>
    )}
}
