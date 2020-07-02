import React from 'react';


export default class Profile extends React.Component {
    constructor(props){
        super(props)
            this.state = {

            }
    }

    displayProfile = () => {
        let profile = this.props.profile
        if(profile.userid){
                return <div>
                    <ul>
                        <li>Profile Type: {profile.gamemaster ? "Gamemaster" : "Player"}</li>
                        <li>Desired Genre: {profile.genre}</li>
                        <li>Romance Acceptable: {profile.romance ? "Yes" : "No"}</li>
                        <li>Desired Frequency of Play: {profile.frequency}</li>
                        <li>Desired Session Duration: {profile.duration}</li>
                        <li>Preferred Alignment: {profile.alignment}</li>
                        <li>Preferred Group Size: {profile.groupsize}</li>
                        <li>PVP Acceptable: {profile.pvp ? "Yes" : "No"}</li>
                        <li>Years of Experience: {profile.exp}</li>
                        <li>GM Experience: {profile.gmexp ? "Yes" : "No"}</li>
                        <li>Player Experience: {profile.playexp ? "Yes" : "No"}</li>
                    </ul>
                </div>
        }
    }

    //add and edit and delete

    render(){
        return (
            <div className="profile-wrap "id="wrap">
                {this.displayProfile()}
            </div>
    )}
}
