import React from 'react';
import './profile.css';
import api from '../services/profile-api';
import { Button } from '../Utility/Utility';
import { Redirect } from 'react-router-dom';

export default class Profile extends React.Component {
    constructor(props){
        super(props)
            this.state = {

            }
    }

    displayProfile = () => {
        let profile = this.props.profile
        if(profile.userid){
            const currentProfile = <li className="profile-li">
                        <p>Profile Type: {profile.gamemaster ? "Gamemaster" : "Player"}</p>
                        <p>Desired Genre: {profile.genre}</p>
                        <p>Romance Acceptable: {profile.romance ? "Yes" : "No"}</p>
                        <p>Desired Frequency of Play: {profile.frequency}</p>
                        <p>Desired Session Duration: {profile.duration}</p>
                        <p>Preferred Alignment: {profile.alignment}</p>
                        <p>Preferred Group Size: {profile.groupsize}</p>
                        <p>PVP Acceptable: {profile.pvp ? "Yes" : "No"}</p>
                        <p>Years of Experience: {profile.exp}</p>
                        <p>GM Experience: {profile.gmexp ? "Yes" : "No"}</p>
                        <p>Player Experience: {profile.playexp ? "Yes" : "No"}</p>
                    </li>
            return currentProfile
        }else{
            return <p>No profile found! Head over to Create New Profile to get started!</p>
        }
    }

    profileDelete = () => {
        let profile = this.props.profile
        api.deleteProfile(profile)
        this.props.viewCreate()
    }

    //add and edit and delete

    render(){
        return (
            <div className="profile-wrap">
                <ul>
                    {this.displayProfile()}
                </ul>
                <Button onClick={this.profileDelete}>Delete Profile</Button>
            </div>
    )}
}
