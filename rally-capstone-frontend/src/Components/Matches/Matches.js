import React from 'react'
import profileApi from '../services/profile-api';

export default class Matches extends React.Component {
    state = {
        matches: [{}]
    }

    componentDidMount(){
        profileApi.getProfileMatches()
            .then(data => { this.setState({ profile: data }) })
            .catch()
    }

    displayMatches = () => {
        let matches = this.state.matches
        if(matches){
            return <div>
                <ul>
                       
                </ul>
            </div>
        }
    }

    render(){
        return (
            <div className="match-wrap">
                {this.displayMatches()}
            </div>
    )}
}