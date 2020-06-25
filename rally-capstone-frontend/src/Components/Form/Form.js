import React from 'react'
import './form.css'

export default class Form extends React.Component {
    constructor(props){
        super(props)
            this.state = {

            }
    }

    handleForm = (e) => {
        e.preventDefault()
        
    }

    render(){
        return (
        <div className="form-wrap">
            <h2>Match Profiles</h2>
            <p>It is our goal at Rally! is to match potential players together using a set of simple, but critical critera. We prefer not to allow options that are more generic,
                such as 'anything is fine', or 'all of the above' specifically to foster more compatability. Please answer as accurately as possible, to improve match results!
            </p>
            <form onSubmit={this.handleForm()}>
                <fieldset className="profile">
                    <legend>Create your Match Profile</legend>
                    <label for="gamemaster">Is this a GM profile?</label>
                    <select id="gamemaster">
                        <option value="yes">Yes</option>
                        <option value="no" selected="selected">No</option>
                    </select>
                    <label for="genre">Desired Genre</label>
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
                    <label for="romance">Romance acceptable within the game?</label>
                    <select id="romance">
                        <option value="yes">Yes</option>
                        <option value="no" >No</option>
                    </select>
                    <label for="frequency">How often do you prefer to play?</label>
                    <select id="frequency" name="frequency">
                        <option value="twice-weekly">Twice Weekly</option>
                        <option value="weekly" selected="selected">Weekly</option>
                        <option value="bi-weekly">Bi-Weekly</option>
                        <option value="month">Month</option>
                    </select>
                    <label for="duration">How long do you like a session to be?</label>
                    <select id="duration" name="duration">
                        <option value="short">Short 2 to 3 Hours</option>
                        <option value="average" selected="selected">Average 3 to 4 Hours</option>
                        <option value="long">Long 5+ Hours</option>
                    </select>
                    <label for="alignment">Desired party alignment?</label>
                    <select id="alignment" name="alignment">
                        <option value="good">Good</option>
                        <option value="evil">Evil</option>
                        <option value="lawful">Lawful</option>
                        <option value="chaotic">Chaotic</option>
                        <option value="neutral">Neutral</option>
                    </select>
                    <label for="group-size">Desired group size including a GM?</label>
                    <select>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected="selected">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                    <label for="exp">How many years have you been roleplaying?</label>
                    <select id="exp">
                        <option value="0">0</option>
                        <option value="1" >1</option>
                        <option value="2">2</option>
                        <option value="3" >3</option>
                        <option value="4+" >4+</option>
                    </select>
                    <label for="gmexp">Have you ever been a GM?</label>
                    <select id="gmexp">
                        <option value="yes">Yes</option>
                        <option value="no" >No</option>
                    </select>
                    <label for="playerexp">Have you ever been a player?</label>
                    <select id="playerexp">
                        <option value="yes">Yes!</option>
                        <option value="no" >No!</option>
                    </select>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )}
}
