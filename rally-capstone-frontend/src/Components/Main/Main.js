import React from 'react';
import './main.css';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Profile from '../MyProfile/Profile';
import Matches from '../Matches/Matches';
import About from '../About/About';
import Community from '../Community/Community';
import Support from '../Support/Support';
import TokenService from '../services/token';
import profileApi from '../services/profile-api';

export default class Main extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                default: true,
                creating: false,
                viewing: false,
                matching: false,
                about: false,
                community: false,
                support: false,
                profile: {}
            }
    }

    componentDidMount(){
        profileApi.getProfile()
            .then(data => { this.setState({ profile: data }) })
            .catch()
    }

    viewCreate = (e) => {
        e.preventDefault()
        this.setState({ 
            creating: true,
            matching: false,
            viewing: false,
            default: false,
            about: false,
            community: false,
            support: false,
        })
    }

    viewProfile = (e) => {
        e.preventDefault()
        this.setState({ 
            viewing: true,
            creating: false,
            matching: false,
            default: false,
            about: false,
            community: false,
            support: false,
        })
    }

    viewMain = (e) => {
        e.preventDefault()
        this.setState({ 
            default: true,
            matching: false,
            viewing: false, 
            creating: false,
            about: false,
            community: false,
            support: false,
        })
    }

    viewMatch = (e) => {
        e.preventDefault()
        this.setState({ 
            matching: true,
            viewing: false, 
            creating: false,
            default: false,
            about: false,
            community: false,
            support: false,
        })
    }

    viewAbout = (e) => {
        e.preventDefault()
        this.setState({ 
            about: true,
            matching: false,
            viewing: false, 
            creating: false,
            default: false,
            community: false,
            support: false,
        })
    }

    viewCommunity = (e) => {
        e.preventDefault()
        this.setState({ 
            community: true,
            matching: false,
            viewing: false, 
            creating: false,
            default: false,
            about: false,
            support: false,
        })
    }

    viewSupport = (e) => {
        e.preventDefault()
        this.setState({ 
            support: true,
            matching: false,
            viewing: false, 
            creating: false,
            default: false,
            community: false,
            about: false,
        })
    }

    handleLogOut = (e) => {
        e.preventDefault()
        this.props.logOut()
        TokenService.clearAuthToken()
    }

    displayMain = () => {
        if(this.props.loggedIn === false){
            return <>
                <Redirect to="/welcome"/>
            </>
        }else if(this.state.default === true && this.state.viewing === false && this.state.matching === false && this.state.creating === false){
            return <>
                <div className="default-wrap">
                    <h3>How-to</h3>
                    <p>If you are new to Rally! please refer to the Create New Profile tab to create a match profile and get started.
                        It's our goal to help roleplayers find other roleplayers with similar outlooks and desires for their games.
                        The View Matches tab will list other player profiles who want the same genre, and have similar feelings on
                        romantic and player vs player content within games. The rest of the critera may vary, giving you choice of
                        who to contact so you can work on forming a gaming group as you see fit!
                    </p>
                    <h3>Upcoming</h3>
                    <p>We intend to implement a system to message potential players directly on Rally!, as well as a more detailed
                        profile and account set-up.
                    </p>
                    <h3>Advice</h3>
                    <p>We recommend contacting other players with similar enough profiles. It may not be easy to form a full group
                        using only players with exactly the same details, but roleplaying can in part be about compromise!
                    </p>
                </div>
            </>
        }else if(this.state.viewing === true && 
            this.state.creating === false && 
            this.state.matching === false && 
            this.state.default === false && 
            this.state.about === false && 
            this.state.community === false &&
            this.state.support === false){
            return <>
                <Profile profile={this.state.profile} viewCreate={this.viewCreate}/>
            </>
        }else if(this.state.matching === true && 
            this.state.creating === false && 
            this.state.viewing === false && 
            this.state.default === false && 
            this.state.about === false && 
            this.state.community === false &&
            this.state.support === false){
            return <>
                <Matches profile={this.state.profile}/>
            </>
        }else if(this.state.creating === true && 
            this.state.viewing === false && 
            this.state.matching === false && 
            this.state.default === false && 
            this.state.about === false && 
            this.state.community === false &&
            this.state.support === false){
            return <>
                <Form />
            </>
        }else if(this.state.about === true && 
            this.state.creating === false && 
            this.state.matching === false && 
            this.state.default === false && 
            this.state.viewing === false && 
            this.state.community === false &&
            this.state.support === false){
            return <>
                <About />
            </>
        }else if(this.state.community === true && 
            this.state.creating === false && 
            this.state.matching === false && 
            this.state.default === false && 
            this.state.about === false && 
            this.state.viewing === false &&
            this.state.support === false){
            return <>
                <Community />
            </>
        }else if(this.state.support === true && 
            this.state.creating === false && 
            this.state.matching === false && 
            this.state.default === false && 
            this.state.about === false && 
            this.state.community === false &&
            this.state.viewing === false){
            return <>
                <Support />
            </>
        }
}

    render(){
        return (
            <>
            <header>
                <Header 
                viewCreate={this.viewCreate} 
                viewProfile={this.viewProfile} 
                viewMain={this.viewMain}
                viewMatch={this.viewMatch}
                handleLogOut={this.handleLogOut}
                />
            </header>
            <main className="main-wrap" id="wrap">
                <h1>Rally!</h1>
                {this.displayMain()}
            </main>
            <footer>
                <Footer 
                viewAbout={this.viewAbout}
                viewCommunity={this.viewCommunity}
                viewSupport={this.viewSupport}
                />
            </footer>
            </>
    )}
}
