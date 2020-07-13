import React from 'react';
import './form.css';
import profileApi from '../services/profile-api';
import { Button } from '../Utility/Utility';

export default class Form extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                profile: {}
            }
    }

    handleForm = (e) => {
        e.preventDefault()

        const gm = e.target.gamemaster.value
        const genre = e.target.genre.value
        const romance = e.target.romance.value
        const frequency = e.target.frequency.value
        const duration = e.target.duration.value
        const alignment = e.target.alignment.value
        const groupsize = e.target.groupsize.value
        const pvp = e.target.pvp.value
        const exp = e.target.exp.value
        const gmexp = e.target.gmexp.value
        const playexp = e.target.playexp.value

        const newProfile = {gm, genre, romance, frequency, duration, alignment, groupsize, pvp, exp, gmexp, playexp}

        profileApi.addProfiles(newProfile)
            .then(profile => {
                //possibly redirect later
            })
            .catch(console.error)
    }

    render(){
        return (
        <div className="form-wrap">
            <h2>Match Profiles</h2>
            <p>It is our goal at Rally! is to match potential players together using a set of simple, but critical critera. We prefer not to allow options that are more generic,
                such as 'anything is fine', or 'all of the above' specifically to foster more compatability. Please answer as accurately as possible, to improve match results!
            </p>
            <form onSubmit={this.handleForm}>
                <fieldset className="profile-set">
                    <legend>Create your Match Profile</legend>
                    <label htmlFor="gamemaster">Is this a GM profile?</label>
                    <select id="gamemaster" name="gamemaster" defaultValue="no">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label htmlFor="genre">Desired Genre</label>
                    <select id="genre" name="genre">
                        <option value="fantasy">Fantasy</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="modern">Modern/Urban Fantasy</option>
                        <option value="horror">Horror</option>
                        <option value="historical">Historical</option>
                        <option value="superhero">Superhero</option>
                        <option value="post-apocalyptic">Post-Apocalyptic</option>
                        <option value="slice-of-life">Slice of Life</option>
                    </select>
                    <label htmlFor="romance">Romance acceptable within the game?</label>
                    <select id="romance" name="romance">
                        <option value="true">Yes</option>
                        <option value="false" >No</option>
                    </select>
                    <label htmlFor="frequency">How often do you prefer to play?</label>
                    <select id="frequency" name="frequency" defaultValue="Bi-weekly">
                        <option value="Twice Weekly">Twice Weekly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Bi-Weekly">Bi-Weekly</option>
                        <option value="Month">Month</option>
                    </select>
                    <label htmlFor="duration">How long do you like a session to be?</label>
                    <select id="duration" name="duration" defaultValue="average">
                        <option value="Short 2 to 3 Hours">Short 2 to 3 Hours</option>
                        <option value="Average 3 to 4 Hours">Average 3 to 4 Hours</option>
                        <option value="Long 5+ Hours">Long 5+ Hours</option>
                    </select>
                    <label htmlFor="alignment">Desired party alignment?</label>
                    <select id="alignment" name="alignment">
                        <option value="Good">Good</option>
                        <option value="Evil">Evil</option>
                        <option value="Lawful">Lawful</option>
                        <option value="Chaotic">Chaotic</option>
                        <option value="Neutral">Neutral</option>
                    </select>
                    <label htmlFor="groupsize">Desired group size including a GM?</label>
                    <select id="groupsize" name="groupsize" defaultValue="5">
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <label htmlFor="pvp">Is player vs player acceptable to you within a game?</label>
                    <select id="pvp" name="pvp">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label htmlFor="exp">How many years have you been roleplaying?</label>
                    <select id="exp" name="exp">
                        <option value="0">0</option>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3" >3</option>
                        <option value="4" >4+</option>
                    </select>
                    <label htmlFor="gmexp">Have you ever been a GM?</label>
                    <select id="gmexp" name="gmexp">
                        <option value="true">Yes</option>
                        <option value="false" >No</option>
                    </select>
                    <label htmlFor="playexp">Have you ever been a player?</label>
                    <select id="playexp" name="playexp">
                        <option value="true">Yes!</option>
                        <option value="false" >No!</option>
                    </select>
                    <Button type="submit">Submit</Button>
                </fieldset>
            </form>
        </div>
    )}
}
