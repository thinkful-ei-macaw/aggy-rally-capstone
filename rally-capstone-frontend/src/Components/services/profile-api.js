import { API_ENDPOINT } from '../../config';

const profileFetch = (...params) => {
    return fetch(...params)
        .then(res => {
            return res.json();
        });
}

const getProfile = () => {
    return profileFetch(API_ENDPOINT + 'profiles');
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