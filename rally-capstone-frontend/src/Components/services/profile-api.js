import { API_ENDPOINT } from '../../config';
import TokenService from './token';

const profileFetch = (...params) => {
    return fetch(...params)
        .then(res => {
            return res.json();
        });
}

const getProfile = () => {
    return profileFetch(API_ENDPOINT + '/profiles', {
        headers: { 'authorization': 'bearer ' + TokenService.getAuthToken()},
    }); 
}

const getProfileMatches = (profile) => {
    return profileFetch(API_ENDPOINT + `/profiles/match?genre=${profile.genre}&romance=${profile.romance}&pvp=${profile.pvp}`, {
        headers: { 'authorization': 'bearer ' + TokenService.getAuthToken()},
    })
}

const deleteProfile = (profile) => {
    return fetch(API_ENDPOINT + '/profiles/' + profile.id, {
        method: 'DELETE',
        headers: { 
            'content-type': 'application/json',
            'authorization': 'bearer ' + TokenService.getAuthToken()
        },
    })
}

const addProfiles = profile => {
    return profileFetch(API_ENDPOINT + '/profiles', {
        method: 'POST',
        headers: { 
            'content-type': 'application/json',
            'authorization': 'bearer ' + TokenService.getAuthToken()
        },
        body: JSON.stringify(profile)
    });
}

export default {
    getProfile,
    addProfiles,
    getProfileMatches,
    deleteProfile,
}