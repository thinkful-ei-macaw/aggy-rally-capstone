import React from 'react'
import './main.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';

export default class Main extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                loggedIn: true,
            }
    }

    render(){
        return (
        <div>
            <header>
                <Header />
            </header>
            <main className="main-wrap">
                <Form />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )}
}
