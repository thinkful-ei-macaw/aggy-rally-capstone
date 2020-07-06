import React from 'react'
import profileApi from '../services/profile-api';
import './matches.css'

export default class Matches extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                matches: []
            }
    }

    componentDidMount(){
        let profile = this.props.profile
        if(profile){
            profileApi.getProfileMatches(profile)
            .then(data => { this.setState({ matches: data }) })
            .catch()
        }
    }

    displayMatches = () => {
        let matches = this.state.matches
        if(matches){
           const profileMatches = matches.map((a) => (
            <li className="match-li" key={a.id}>
                <p>Profile Type: {a.gamemaster ? "Gamemaster" : "Player"}</p>
                <p>Desired Genre: {a.genre}</p>
                <p>Romance Acceptable: {a.romance ? "Yes" : "No"}</p>
                <p>Desired Frequency of Play: {a.frequency}</p>
                <p>Desired Session Duration: {a.duration}</p>
                <p>Preferred Alignment: {a.alignment}</p>
                <p>Preferred Group Size: {a.groupsize}</p>
                <p>PVP Acceptable: {a.pvp ? "Yes" : "No"}</p>
                <p>Years of Experience: {a.exp}</p>
                <p>GM Experience: {a.gmexp ? "Yes" : "No"}</p>
                <p>Player Experience: {a.playexp ? "Yes" : "No"}</p>
                <p>Player Email: Placeholder</p>
            </li>
           ))
           return profileMatches
        }else{
            return <p>No matches found!</p>
        }
    }

    render(){
        return (
            <div className="match-wrap">
                <ul>
                    {this.displayMatches()}
                </ul>
            </div>
    )}
}