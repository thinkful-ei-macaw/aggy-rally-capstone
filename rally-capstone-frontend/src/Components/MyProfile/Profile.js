import React from 'react';
import profileApi from '../services/profile-api';

export default class Profile extends React.Component {
    state = {
        profile: {}
    }

    componentDidMount(){
        profileApi.getProfile()
            .then(data => { this.setState({ profile: data }) })
            .catch()
    }

    displayProfile = () => {
        let profile = this.state.profile
        if(profile.userid){
                return <div>
                    <ul>
                        <li>{profile.gamemaster}</li>
                        <li>{profile.genre}</li>
                        <li>{profile.romance}</li>
                        <li>{profile.frequency}</li>
                        <li>{profile.duration}</li>
                        <li>{profile.alignment}</li>
                        <li>{profile.groupsize}</li>
                        <li>{profile.exp}</li>
                        <li>{profile.gmexp}</li>
                        <li>{profile.playexp}</li>
                    </ul>
                </div>
        }
    }

    render(){
        return (
            <div className="profile-wrap "id="wrap">
                {this.displayProfile()}
            </div>
    )}
}
