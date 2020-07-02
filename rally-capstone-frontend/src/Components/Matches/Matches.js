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
        profileApi.getProfileMatches(profile)
            .then(data => { this.setState({ matches: data }) })
            .catch()
    }

    displayMatches = () => {
        let matches = this.state.matches
        if(matches){
           const profileMatches = matches.map((a) => (
            <ul key={a.id}>
                <li>Profile Type: {a.gamemaster ? "Gamemaster" : "Player"}</li>
                <li>Desired Genre: {a.genre}</li>
                <li>Romance Acceptable: {a.romance ? "Yes" : "No"}</li>
                <li>Desired Frequency of Play: {a.frequency}</li>
                <li>Desired Session Duration: {a.duration}</li>
                <li>Preferred Alignment: {a.alignment}</li>
                <li>Preferred Group Size: {a.groupsize}</li>
                <li>PVP Acceptable: {a.pvp ? "Yes" : "No"}</li>
                <li>Years of Experience: {a.exp}</li>
                <li>GM Experience: {a.gmexp ? "Yes" : "No"}</li>
                <li>Player Experience: {a.playexp ? "Yes" : "No"}</li>
            </ul>
           ))
           return profileMatches
        }else{
            return <p>No matches found</p>
        }
    }

    render(){
        return (
            <div className="match-wrap">
                {this.displayMatches()}
            </div>
    )}
}