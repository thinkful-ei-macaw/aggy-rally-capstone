import React from 'react';
import profileApi from '../services/profile-api';

export default class Profile extends React.Component {
    state = {
        profile: []
    }

    componentDidMount(){
        profileApi.getProfile()
            .then(data => { this.setState({ profile: data }) })
            .catch()
    }

    // displayProfile = () => {
    //     let profile = this.state.profile
    //     console.log(profile)
    //     if(profile.id){let result = profile.map((profile => {
    //             return <div>
    //                 <p>{profile.gamemaster}</p>
    //             </div>
    //         }))
    //         return result
    //     }
    // }

    render(){
        return (
            <div className="profile-wrap "id="wrap">
                {this.displayProfile()}
            </div>
    )}
}
