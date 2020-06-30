import { API_ENDPOINT } from '../../config';

const profileFetch = (...params) => {
    return fetch(...params)
        .then(res => {
            return res.json();
        });
}

const getProfile = () => {
    return profileFetch(API_ENDPOINT + 'profiles/2'); //figure out a better way to get userid 
}

const addProfiles = profile => {
    return profileFetch(API_ENDPOINT + 'profiles', {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(profile)
    });
}

export default {
    getProfile,
    addProfiles,
}